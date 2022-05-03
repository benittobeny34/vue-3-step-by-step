export default {
    template: `
                 <button class="btn btn-primary bg-gray-200 hover:bg-gray-500 border rounded px-5 py-3 mx-2 disabled:cursor-not-allowed" :disabled="processing">
                    <slot/>
                </button>
                `,
    data() {
        return {
            processing: true
        };
    }
}