/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            name: "Reactathon",
            description: "An event to work on ReactJs, Redux",
            startDate: "02-Jun-2018",
            endDate: "05-Jun-2018",
            tense: "Past Events"

        },
        {
            id: 2,
            name: "CloudFormationDay",
            description: "An event to work on AWS",
            startDate: "02-July-2018",
            endDate: "04-July-2018",
            tense: "Current Events"
        },
        {
            id: 3,
            name: "Dockerathon",
            description: "An event to work on Dockers",
            startDate: "02-Aug-2018",
            endDate: "06-Aug-2018",
            tense: "Future Events"
        },
        {
            id: 4,
            name: "Reactathon1",
            description: "An event to work on ReactJs, Redux",
            startDate: "02-Jun-2018",
            endDate: "05-Jun-2018",
            tense: "Past Events"

        },
        {
            id: 5,
            name: "CloudFormationDay1",
            description: "An event to work on AWS",
            startDate: "02-July-2018",
            endDate: "04-July-2018",
            tense: "Current Events"
        },
        {
            id: 6,
            name: "Dockerathon1",
            description: "An event to work on Dockers",
            startDate: "02-Aug-2018",
            endDate: "06-Aug-2018",
            tense: "Future Events"
        }
    ]
}
