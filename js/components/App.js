import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    template: `
    <div class="space-y-8">
            <assignmentList :assignments="filters.inProgress" title="In Progress"></assignmentList> 
            <assignmentList :assignments="filters.completed" title="Completed"></assignmentList> 
            <assignmentCreate @add="add"></assignmentCreate>
            
    </div>
    `,
    components: {
        AssignmentList,
        AssignmentCreate
    },
    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter', complete: false, id: 2},
                {name: 'Turn in HomeWork', complete: false, id: 3},
                {name: 'Submit Home Work', complete: false, id: 4},
            ],
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length+1
            })
        }
    }
}