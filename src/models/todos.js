import { types, getRoot, flow } from "mobx-state-tree"



const Store = types
    .model({
        questionToScroll: types.string,
    })
    .actions(self => ({
        remove() {
            getRoot(self).removeTodo(self)
        },
        setQuestionToScroll(id) {
            self.questionToScroll = id
        },
        fetchData: flow(function* () {
            self.state = "pending"
            try {
                self.githubProjects = yield fetchGithubProjectsSomehow()
                self.state = "done"
            } catch (error) {
                // ... including try/catch error handling
                console.error("Failed to fetch projects", error)
                self.state = "error"
            }
            // The action will return a promise that resolves to the returned value
            // (or rejects with anything thrown from the action)
            return self.githubProjects.length
        })
    }))


export default Store
