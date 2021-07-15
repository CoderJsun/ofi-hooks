import {
    mapActions,
} from 'vuex'

export function useActions (mapper){
   return mapActions(mapper)
}
