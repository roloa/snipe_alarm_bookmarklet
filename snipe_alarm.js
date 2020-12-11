snipe_alarm = function() {

  // prepare sounds

  // sounds as BASE64
  var sound_one_str = "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";

  var sound_two_str = "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";

  var sound_time_str = "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";

  var sound_one = new Audio("data:audio/wav;base64," + sound_one_str);
  var sound_two = new Audio("data:audio/wav;base64," + sound_two_str);
  var sound_time = new Audio("data:audio/wav;base64," + sound_time_str);


  // DOM injection

  var new_tr_target_time = document.createElement("tr");
  var new_td_target_title = document.createElement("td");
  new_td_target_title.innerHTML = "スナイプ予定時刻 :";
  new_td_target_title.align = "right";
  var new_td_target_time = document.createElement("td");
  new_td_target_time.innerHTML = '<input class="txtbox" type="text" id="SNIPE_TARGET" size="40" value="00:00:00" disabled >';

  new_tr_target_time.appendChild(new_td_target_title);
  new_tr_target_time.appendChild(new_td_target_time);

  var new_tr_edit_time = document.createElement("tr");
  var new_td_edit_title = document.createElement("td");
  new_td_edit_title.innerHTML = "スナイプ時刻設定 :";
  new_td_edit_title.align = "right";
  var new_td_edit_time = document.createElement("td");
  new_td_edit_time.innerHTML = '' +
  '<input class="txtbox" type="text" id="SNIPE_EDIT_MIN" size="2" value="35" >分' +
  '<input class="txtbox" type="text" id="SNIPE_EDIT_SEC" size="2" value="0" >秒' +
  '<input class="txtbox" type="button" id="SNIPE_EDIT_SET" size="3" value="[設定]" >' +
  '<input class="txtbox" type="button" id="SNIPE_EDIT_TEST" size="6" value="[音の確認]" >';

  new_tr_edit_time.appendChild(new_td_edit_title);
  new_tr_edit_time.appendChild(new_td_edit_time);

  var table_in_dom = document.getElementsByName("JST")[0].parentNode.parentNode.parentNode;
  table_in_dom.appendChild( new_tr_target_time );
  table_in_dom.appendChild( new_tr_edit_time );

  var snipe_alarm_time_hashtable = {};

  // utility functions
  var min_sec_to_string = function( var_min, var_sec) {
    var ret_min, ret_sec, ret_concat_str;
    if ( var_min < 10 ){
      ret_min = "0" + String(var_min);
    } else {
      ret_min = String(var_min);
    }
    if ( var_sec < 10 ){
      ret_sec = "0" + String(var_sec);
    } else {
      ret_sec = String(var_sec);
    }
    var ret_concat_str = ret_min + ":" + ret_sec;
    return ret_concat_str;
  }

  // alarm set button
  var button_set = document.getElementById("SNIPE_EDIT_SET");
  button_set.onclick = function(){
    snipe_alarm_time_hashtable = {};

    var snipe_min = document.getElementById( "SNIPE_EDIT_MIN" ).value;
    var snipe_sec = document.getElementById( "SNIPE_EDIT_SEC" ).value;

    document.getElementById( "SNIPE_TARGET" ).value = "0000/00/00 XX:" + min_sec_to_string( snipe_min, snipe_sec ) ;

    for( var i=0 ; i<10 ; i++ ){

      var alarm_time = min_sec_to_string( snipe_min, snipe_sec )
      console.log(alarm_time);
      // the time from 10 second before, bop x 7, and ,beep, beep, beep, boop!(the time!) like thing.
      if( i == 0 ) {
        snipe_alarm_time_hashtable[ alarm_time ] = "time";
      } else if ( i <= 3 ) {
        snipe_alarm_time_hashtable[ alarm_time ] = "two";
      } else {
        snipe_alarm_time_hashtable[ alarm_time ] = "one";
      }

      // loop at below zero
      snipe_sec -= 1;
      if (snipe_sec < 0) {
        snipe_sec = 59;
        snipe_min -= 1;
        if ( snipe_min < 0 ) {
          snipe_min = 59;
        }
      }

    }

  }

  // sound test button
  var button_test = document.getElementById("SNIPE_EDIT_TEST");
  var test_count = 0;
  button_test.onclick = function(){
    if ( test_count % 3 == 0 ) {
      sound_one.play();
    } else if ( test_count % 3 == 1 ) {
      sound_two.play();
    } else {
      sound_time.play();
    }
    test_count += 1;
  };

  var jst_clock_prev = "";

  // interval polling function
  interval_function = function(){

    var jst_clock_min_sec = document.clock.JST.value.substr(-5);

    if( jst_clock_prev == jst_clock_min_sec ) {
      // do nothing at jst clock was not change
    } else {
      if( snipe_alarm_time_hashtable[ jst_clock_min_sec ] == "one" ){
        sound_one.play();
      } else if( snipe_alarm_time_hashtable[ jst_clock_min_sec ] == "two" ){
        sound_two.play();
      } else if( snipe_alarm_time_hashtable[ jst_clock_min_sec ] == "time" ){
        sound_time.play();
      }
    }
    jst_clock_prev = jst_clock_min_sec;

  }

  var interval_polling = 100;
  setInterval( interval_function , interval_polling );

  // testing sound
  sound_time.play();

}

snipe_alarm();
