import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2" v-show="assignments.length">
        {{ title}} <span>({{ assignments.length}})</span>
        </h2>
        <assignment-tags 
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
        >
        
</assignment-tags>
        <ul class="border  divide-y border-gray-600 divide-gray-600">
            <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
        </ul>
    </section>
    `,
    components: {
        Assignment,
        AssignmentTags
    },
    props: {
        assignments: {
            type: Array,
        },
        title: {
            type: String
        }
    },
    data() {
        return {
            currentTag: 'all',
        };
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag == 'all') return this.assignments;
            return this.assignments.filter(a => a.tag == this.currentTag);
        }
    }
}