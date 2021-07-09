import {
    computed
} from 'vue'
import {
    mapState,
    useStore
} from 'vuex'

export function useState(mapper) {
    // 获取到 store
    const store = Store()
    // 获取到返回函数
    const storeStateFns = mapState(mapper)
    // 遍历
    const storeState = {}
    Object.keys.forEach(fnkey => {
        const fn = storeStateFns[fnkey].bind({
            $store: store
        })
        storeState[fnkey] = computed(fn)
    });
    return storeState
}

export function Store() {
    const store = useStore()
    return store
}