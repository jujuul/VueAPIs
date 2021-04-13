export default {
    bind(el, binding) {
        console.log('bind')
        console.log(binding)
        const _ops = binding.value
        const _c = el.getElementsByClassName(_ops.className)
        _c[_ops.curIdx].className += ` ${_ops.activeClass}`
    },
    update(el, binding) {
        console.log('update')
        console.log(binding)
        const _ops = binding.value,
            _oOps = binding.oldValue,
            _c = el.getElementsByClassName(_ops.className)
        _c[_oOps.curIdx].className = `${_oOps.className}`
        _c[_ops.curIdx].className += ` ${_ops.activeClass}`
    },
    inserted() {
        console.log('inserted')
    }
}