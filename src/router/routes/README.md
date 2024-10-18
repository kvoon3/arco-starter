# How routes be generated

Arco automatically generates routes for this application based on the default export under directory :

1. `/src/router/routes/modules`
2. `/src/router/routes/externalModules`

We extract routes(modules default export) and merge them to one array, finally we export:

1. `appRoutes`
2. `appExternalRoutes`

---

## For example:

> See `/src/router/routes/index.ts`

Input:

```ts
const pathRoutesMap = {
  './path/to/route': routeObject1,
  './path/to/route2': [routeObject2, routeObject3],
}
```

Output:

```ts
const appRoutes = [routeObject1, routeObject2, routeObject3]
```
