<script lang="ts" setup>
import { ref } from 'vue'
import type {
  EnterpriseCertificationModel,
  UnitCertification,
} from '~/api/user-center'
import {
  queryCertification,
} from '~/api/user-center'
import useLoading from '~/hooks/loading'
import CertificationRecords from './certification-records.vue'
import EnterpriseCertification from './enterprise-certification.vue'

const { loading, setLoading } = useLoading(true)
const data = ref<UnitCertification>({
  enterpriseInfo: {} as EnterpriseCertificationModel,
  record: [],
})
async function fetchData() {
  try {
    const { data: resData } = await queryCertification()
    data.value = resData
  }
  catch {
    // you can report use errorHandler or other
  }
  finally {
    setLoading(false)
  }
}
fetchData()
</script>

<template>
  <a-spin :loading="loading" style="width: 100%">
    <EnterpriseCertification :enterprise-info="data.enterpriseInfo" />
    <CertificationRecords :render-data="data.record" />
  </a-spin>
</template>

<style scoped lang="less"></style>
