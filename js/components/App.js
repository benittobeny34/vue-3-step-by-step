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
            assignments: [],
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
                id: this.assignments.length + 1
            })
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            });
    }
}