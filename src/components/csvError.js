import React from "react";
import "../styles/csverror.css";

function CsvError() {
  return (
    <div class="error-msg">
      <i class="fa fa-times-circle"></i>
      <strong>Something went wrong.</strong>
      <br /><br />
      It could any of following :
      <ul>
        <li> If error occured while uploading then following could be reason : 
        <ul>
          <li>CSV file not in correct format</li>
          <li>Trying to save duplicate record ( id is primary key )</li>
          <li>MySQL server not responding ( rare scenario )</li>
        </ul>
        </li>

        <li> If error occurd while displaying table then following could be reason :
        <ul>
          <li>CSV file not in correct format</li>
          <li>Trying to save duplicate record ( id is primary key )</li>
          <li>MySQL server not responding ( rare scenario )</li>
        </ul>
        </li>
      </ul>
    </div>
  );
}

export default CsvError;
