const projects = {
    project1: {
        title: "FranFinance Application",
        summary: [
            "Analyzed and resolved business-raised issues, performing root-cause analysis, and implementing fixes to ensure smooth and reliable application functionality.",
            "Utilized Pega Tracer and application logs to troubleshoot complex issues, identify root causes, and implement effective solutions.",
            "Troubleshot and fixed issues across core Pega components, including report definitions, sections, job schedulers, queue processors, data transforms, validations, activities, and data pages.",
            "Leveraged Pega Diagnostic Center (PDC) to monitor application alerts, investigate underlying issues, and implement corrective actions to improve application stability and performance."
        ]
    },
    project2: {
        title: "Claims Supervision Application",
        summary: [
            "Analyzed business requirements and contributed to proposing and implementing effective Pega solutions aligned with functional requirements.",
            "Configured and implemented key Pega components, including case life cycle, activities, flow actions, job schedulers, data transforms, sections, and report definitions.",
            "Developed Pega UI components, including portals, dashboards, and widgets, to provide intuitive user interfaces and effective visualization of application data.",
            "Designed and executed end-to-end scenario test cases for case types to validate functional correctness and ensure application quality."
        ]
    },
    project3: {
        title: "Outage Component",
        summary: [
            "Analyzed business requirements and proposed effective solutions, translating functional requirements into scalable Pega implementations.",
            "Configured and implemented key Pega components, including data transforms, data pages, sections, decision tables, decision Trees, and when conditions.",
            "Implemented REST integrations to enable seamless communication between the reusable component and provider application.",
            "Collaborated with multiple application and cross-functional teams to understand integration requirements, support component adoption, and resolve implementation-related issues."
        ]
    },
    project4: {
        title: "CREWS Application",
        summary: [
            "Analyzed business requirements, proposed effective solutions, and implemented functional requirements by developing and configuring Pega application components.",
            "Developed and configured key Pega components, including data transforms, activities, flows, flow actions, sections, data pages, report definitions, job schedulers, queue processors, and skins.",
            "Designed and implemented connect REST and service REST integrations to enable seamless data exchange with external systems and support end-to-end business workflows.",
            "Led the development of selected application components, coordinating implementation activities and ensuring timely delivery of quality solutions.",
            "Conducted code reviews to ensure adherence to Pega development standards, coding best practices, and application quality guidelines.",
            "Mentored junior developers, providing technical guidance, knowledge sharing, and support in resolving development and implementation challenges.",
            "Investigated and resolved business-reported defects, performing root-cause analysis and implementing fixes to ensure system reliability and smooth application functionality."
        ]
    },
    project5: {
        title: "Customer Decisioning Application",
        summary: [
            "Led the implementation of Single Sign-On (SSO) authentication across multiple environments by configuring authentication services and keystores, streamlining secure user access.",
            "Led the customization of operations manager application to enhance user experience and deliver personalized workflows based on business requirements.",
            "Led the design and implementation of Kafka-based integrations in Pega for event-driven communication, leveraging JSON and Avro message formats.",
            "Developed a new Pega constellation application leveraging Pega Generative AI capabilities, including GenAI connects, agents, and tools, and DX APIs to automate the creation and configuration of new actions.",
            "Developed and configured key Pega components, including data flows, strategies, datasets, service SOAP, connect REST, validations, data jobs, activities, data transforms, decision data, access groups, access roles, access roles to object, access control policies, queue processors, job schedulers, and file listeners.",
            "Supported Pega application upgrades, analyzing compatibility considerations, resolving upgrade-related issues, and validating application functionality to ensure a smooth transition to the target Pega version.",
            "Collaborated with cross-functional teams and stakeholders to understand requirements, coordinate integration activities, resolve technical challenges, and ensure successful end-to-end delivery.",
            "Mentored junior developers and supported team members by providing technical guidance and resolving code-related queries to improve team productivity and code quality.",
            "Built and configured deployment pipelines using Pega Deployment Manager to automate and streamline the deployment of application artifacts across multiple environments."
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