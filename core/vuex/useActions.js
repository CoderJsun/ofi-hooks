import {
    mapActions,
    createNamespacedHelpers
} from 'vuex'

export function useActions(moduleName, mapper) {
    let mapperFn = mapActions
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapActions
    }
    return mapperFn(mapper)
}