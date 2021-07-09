import {
    computed
} from 'vue'
import {
    useStore
} from 'vuex'

export function useMapper(mapper, mapFn) {
    // 获取到 store
    const store = useStore()
    // 获取到返回函数
    const storeStateFns = mapFn(mapper)
    // 遍历
    const storeState = {}

    Object.keys(storeStateFns).forEach(fnkey => {
        const fn = storeStateFns[fnkey].bind({
            $store: store
        })
        storeState[fnkey] = computed(fn)
    });
    return storeState
}