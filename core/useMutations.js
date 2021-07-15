import {
    mapMutations,
} from 'vuex'

export function useMutations (mapper){
   return mapMutations(mapper)
}
