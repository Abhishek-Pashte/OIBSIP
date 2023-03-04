var no_pending_task = 0;
var no_completed_task = 0;
var pending_task = [];
var completed_task = [];

// Function to add the new task in list
function add() {
    if ( document.getElementById( "task" ).value == "" ) {
        alert( "Enter task description..." );
    }
    else {
        no_pending_task += 1;
        var new_task = `
    <div class="new_task" id="div${no_pending_task}" ondblclick="pending_task_edit(${no_pending_task})">
        <div class="pending_task_no">${no_pending_task}</div>
        <div class="task_txt" id="txt${no_pending_task}">
        ${document.querySelector( "#task" ).value}</div>
        <input class="complete_checkbox" type="checkbox" id="checkbox${no_pending_task}" onclick="movetocomplete(${no_pending_task})">
        <button class="edit_button" onclick="pending_task_edit(${no_pending_task})">Edit</button>
        <button class = "delete" onclick="pending_delete(${no_pending_task})">Delete</button>
    </div>`;
        document.querySelector( '#pending_task' ).innerHTML += new_task;
        document.querySelector( '#task' ).value = "";
    }
}

// Function to move the task from pending task list to completed task list
function movetocomplete( task_no ) {
    no_completed_task += 1;
    no_pending_task -= 1;
    var new_txt = document.getElementById( `txt${task_no}` ).innerText;
    var new_task = `
    <div class="new_task" id="div${no_completed_task}" ondblclick="complete_task_edit(${no_completed_task})">
        <div class="completed_task_no">${no_completed_task}</div>
        <div class="task_txt" id="ctxt${no_completed_task}">
        ${new_txt}</div>
        <button class="edit_button" onclick="complete_task_edit(${no_completed_task})">Edit</button>
        <button class = "delete" onclick="completed_delete(${no_completed_task})">Delete</button>
    </div>`;
    document.querySelector( '#completed_task' ).innerHTML += new_task;
    const element = document.querySelector( `#div${task_no}` );
    element.remove();
    recalculate();
}

// Function to delete pending task
function pending_delete( task_no ) {
    const element = document.querySelector( `#div${task_no}` );
    element.remove();
    no_pending_task -= 1;
    recalculate();
}

// Function to delete completed task
function completed_delete( task_no ) {
    const element = document.querySelector( `#div${task_no}` );
    element.remove();
    no_completed_task -= 1;
    recalculate();
}

// Function to recalculate the task number
function recalculate() {
    const pendingdivlist = document.querySelectorAll( ".pending_task_no" );
    const completeddivlist = document.querySelectorAll( ".completed_task_no" );
    console.log( no_pending_task + " " + no_completed_task );
    for ( let i = 0; i < no_pending_task; i++ ) {
        pendingdivlist[i].innerText = i + 1;
    }
    for ( let i = 0; i < no_completed_task; i++ ) {
        completeddivlist[i].innerText = i + 1;
    }
}

// Function to edit pending task
function pending_task_edit( task_no ) {
    console.log( document.getElementById( "txt1" ) );
    var previous_task_data = document.getElementById( "txt" + task_no ).innerText;
    var new_task_data = prompt( "Edit task : " );
    if ( new_task_data.length > 0 )
        document.getElementById( "txt" + task_no ).innerText = new_task_data;
    else
        document.getElementById( "txt" + task_no ).innerText = previous_task_data;
}

// Function to edit completed task
function complete_task_edit( task_no ) {
    console.log( document.getElementById( "txt1" ) );
    var previous_task_data = document.getElementById( "ctxt" + task_no ).innerText;
    var new_task_data = prompt( "Edit task : " );
    if ( new_task_data.length > 0 )
        document.getElementById( "ctxt" + task_no ).innerText = new_task_data;
    else
        document.getElementById( "ctxt" + task_no ).innerText = previous_task_data;
}
