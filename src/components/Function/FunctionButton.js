export default {
    name: 'funtional-button',
    functional: true,
    render(createElement, {
        data,
        children
    }) {
        return createElement('button', data, [...children])
    }
}