export default {
    template: `
            <li>
                <label class="p-3 flex justify-between items-center">
                    <span>{{ assignment.name}}</span>
                    <input type="checkbox" class="ml-3" v-model="assignment.complete">
                </label>
            </li> 
    `,
    props: {
        assignment: {
            type: Object
        }
    }
}