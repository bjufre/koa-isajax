'use strict';

export default function isajax() {
    return async function _isajax(context, next) {
        context.state.xhr = context.request.get('X-Requested-With') === 'XMLHttpRequest';
        return await next();
    }
}