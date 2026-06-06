const projects = {
    project1: {
        title: "FranFinance Application",
        summary: [
            "Analyzed and implemented defect fixes raised by the business to ensure smooth application functionality.",
            "Utilized debugging tools such as tracer and pega logs to identify and resolve system issues.",
            "Designed and implemented core pega components, including report definitions, sections, job schedulers, queue processors, data transforms, validations, activities, and data pages.",
            "Worked with PDC to monitor and eliminate system alerts for improved application performance."
        ]
    },
    project2: {
        title: "Claims Supervision Application",
        summary: [
            "Analyzed business requirements, proposed, and implemented effective solutions.",
            "Developed and configured pega components, including case life cycle design, activities, flows, flow actions, job schedulers, data transforms, sections, report definitions, portals, dashboards, and widgets.",
            "Worked with PDC to monitor and eliminate system alerts for improved application performance.",
            "Designed and executed unit test cases and end-to-end scenario test cases for the case types to ensure functional correctness."
        ]
    },
    project3: {
        title: "Outage Component",
        summary: [
            "Analyzed, proposed, and implemented effective solutions for business requirements.",
            "Developed key pega components, including properties, DSS, data transforms, application settings, connect-REST, sections, decision tables, decision trees, and when conditions.",
            "Implemented and executed unit test cases to meet functionality and quality standards."
        ]
    },
    project4: {
        title: "Volcker Application",
        summary: [
            "Analyzed business requirements and proposed effective solutions.",
            "Implemented business requirements by developing and configuring application components in Pega.",
            "Developed and configured pega components, including data transforms, activities, flows, flow actions, sections, data pages, declare expressions, access roles, and access control policies.",
            "Worked with PDC to monitor and eliminate system alerts, improving overall application performance."
        ]
    },
    project5: {
        title: "CREW Application",
        summary: [
            "Analyzed, proposed, and implemented solutions for business requirements in pega.",
            "Investigated and resolved defects reported by the business to ensure system reliability.",
            "Developed and configured pega components, including activities, connect-RESTs, report definitions, data pages, data transforms, sections, job schedulers, queue processors, and skins.",
            "Implemented unit test cases to validate functionality and ensure adherence to quality standards."
        ]
    },
    project6: {
        title: "Decisioning Application",
        summary: [
            "Enabled Single Sign-On (SSO) authentication for multiple environments to streamline secure user access.",
            "Customized 1:1 operational journeys to enhance user experience and personalize workflows.",
            "Developed and configured key pega components including data flows, strategies, datasets, service-SOAPs, service-RESTs, connect-RESTs, validations, data types, data jobs, activities, data transforms, decision data, access groups, queue processors, job schedulers, report definitions, authentication services, and key stores.",
            "Implemented unit test cases to validate functionality and ensure adherence to quality standards.",
            "Worked with PDC to monitor and eliminate system alerts for improved application performance.",
            "Worked with Pega Deployment Manager to deploy artifacts across multiple environments"
        ]
    }
};

function openModal(id) {
    const data = projects[id];
    document.getElementById("modal-title").textContent = data.title;
    const workList = document.getElementById("modal-summary");
    workList.innerHTML = "";
    data.summary.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        workList.appendChild(li);
    });
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};