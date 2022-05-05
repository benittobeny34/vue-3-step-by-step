import Assignment from "./Assignment.js";
export default {
    template: `
    <section>
        <h2 class="font-bold mb-2" v-show="assignments.length">{{ title}}</h2>
        <ul>
            <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
        </ul>
    </section>
    `,
    components: {
        Assignment
    },
    props: {
        assignments: {
            type: Array,
        },
        title: {
            type: String
        }
    }
}