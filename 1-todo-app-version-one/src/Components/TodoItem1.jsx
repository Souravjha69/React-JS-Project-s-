function TodoItem() {
  let Todoname = "Buy Milk";
  let Tododate = "4/10/2023";
  return (
    <div>
      <div class="row Sourav-row">
        <div class="col-6"><b>{Todoname}</b></div>
        <div class="col-4">{Tododate}</div>
        <div class="col-2" >
          <button type="button" className="btn btn-danger Sourav-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;