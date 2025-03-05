document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const taskBadge = document.getElementById('task-badge').value;
    const taskTitle = document.getElementById('task-title').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskListContainer = document.getElementById('task-list-container');

    //function to create the task card
    function createTaskCard(taskBadge, taskTitle, taskDesc, taskDeadline) {

        //create the card Container div
        const taskCard = document.createElement('div');
        taskCard.className = 'card bg-[#F4F7FF]';

        //create the card body div
        const taskCardBody = document.createElement('div');
        taskCardBody.className = 'card-body p-6';

        taskCard.appendChild(taskCardBody);

        //create contents Container div
        const contentsContainer = document.createElement('div');
        contentsContainer.className = 'flex flex-col gap-4 pb-4';

        taskCardBody.appendChild(contentsContainer);

        //create the badge
        const taskBadgeElement = document.createElement('div');
        taskBadgeElement.className = 'badge bg-white text-[#00303C] px-4 py-2 rounded-lg';
        taskBadgeElement.textContent = taskBadge;

        contentsContainer.appendChild(taskBadgeElement);

        //create the task title
        const taskTitleElement = document.createElement('h2');
        taskTitleElement.className = 'card-title task-title text-2xl font-medium';
        taskTitleElement.textContent = taskTitle;

        contentsContainer.appendChild(taskTitleElement);

        //create the task description
        const taskDescElement = document.createElement('p');
        taskDescElement.className = 'text-sm bg-white text-gray-500 p-4 rounded-lg';
        taskDescElement.textContent = taskDesc;

        contentsContainer.appendChild(taskDescElement);

        //create the horizontal rule
        const hrElement = document.createElement('hr');
        hrElement.className = 'border-gray-300 border-dashed';

        taskCardBody.appendChild(hrElement);

        //deadlineItemsContainer
        const deadlineItemsContainer = document.createElement('div');
        deadlineItemsContainer.className = 'flex justify-between items-center pt-4';

        taskCardBody.appendChild(deadlineItemsContainer);

        //create the deadline container
        const deadlineContainer = document.createElement('div');
        deadlineContainer.className = 'text-[#00303C]';

        deadlineItemsContainer.appendChild(deadlineContainer);

        //create the deadline text
        const deadlineTitle = document.createElement('span');
        deadlineTitle.textContent = 'Deadline';

        deadlineContainer.appendChild(deadlineTitle);

        //create the deadline value
        const deadLineValue = document.createElement('p');
        deadLineValue.className = 'text-[#00303C] font-medium';
        deadLineValue.textContent = taskDeadline;

        deadlineContainer.appendChild(deadLineValue);

        //create the completed button
        const completedButton = document.createElement('button');
        completedButton.className = 'button bg-[#3752FD] text-white px-5 py-3 rounded-lg text-medium task-completed-btn border border-transparent hover:bg-white hover:text-[#3753FD] hover:border-[#3753FD]';
        completedButton.textContent = 'Completed';

        deadlineItemsContainer.appendChild(completedButton);

        taskListContainer.appendChild(taskCard);
    }

    createTaskCard(taskBadge, taskTitle, taskDesc, taskDeadline);
    document.getElementById('task-form').reset();
    document.getElementById('task-form').closest('section').classList.add('hidden');
});