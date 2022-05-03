export default {
    template: `
                 <button :class='{
                "btn border rounded px-5 py-3 mx-2" : true,
                   "bg-blue-200 hover:bg-blue-500 " : type=== "primary",
                   "bg-green-200 hover:bg-green-500 " : type=== "success",
                   "bg-red-200 hover:bg-red-500 " : type === "danger",
                   "bg-grey-200 hover:bg-grey-500 " : type === "muted",
                   "is-loading" : processing
                 }'
                 disabled="processing">
                    <slot/>
                </button>
                `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}