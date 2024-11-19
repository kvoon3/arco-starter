import { useQuery } from '@tanstack/vue-query'
import type { ContactModel } from '~/api/contact'
import { weilaFetch } from '~/api/instances/fetcher'

export const useContactStore = defineStore('contact', () => {
  const org_num = ref(0)

  const enabled = computed(() => Boolean(org_num.value))

  function updateOrgNumber(num: number) {
    org_num.value = Number(num)
  }

  const query = useQuery({
    enabled,
    queryKey: ['contact', org_num],
    queryFn: () => (weilaFetch<ContactModel>(
      '/corp/web/get-address-list',
      { body: { org_num: org_num.value } },
    )
      .then(i => i.address_list))
      .then((contact) => {
        return {
          ...contact,
          members: contact.members.map(member => ({
            ...member,
            id: member.user_id,
          })),
          depts: contact.depts.map(dept => ({
            ...dept,
            members: dept.members.map(member => ({
              ...member,
              id: member.user_id,
            })),
          })),
        }
      }),
  })

  return {
    // contact,
    // updateContact,
    org_num,
    updateOrgNumber,
    ...query,
  }
})
