import AssignmentList from "./AssignmentList.js";

export default {
    template: `
    <div class="space-y-8">
            <assignmentList :assignments="filters.inProgress" title="In Progress"></assignmentList> 
            <assignmentList :assignments="filters.completed" title="Completed"></assignmentList> 
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                        <input v-model="newAssignment" type="text" placeholder="New Assignment"  class="p-2">
                        <button type="submit" class="bg-white border-l p-2">Add</button>
                </div>
            </form>
    </div>
    `,
    components: {
        AssignmentList
    },
    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter', complete: false, id: 2},
                {name: 'Turn in HomeWork', complete: false, id: 3},
                {name: 'Submit Home Work', complete: false, id: 4},
            ],
            newAssignment: ''
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
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length+1
            })

            this.newAssignment = "";

        }
    }
}