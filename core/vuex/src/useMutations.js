import {
    mapMutations,
    createNamespacedHelpers
} from 'vuex'

export function useMutations(moduleName, mapper) {
    let mapperFn = mapMutations
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapMutations
    }
    return mapperFn(mapper)
}