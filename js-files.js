
var turno = 0;
var eid = 0, pid = 0, xp = 0, xp_aux = 0, xp_player = 0,
	combat_div = document.getElementById("combat_div"),
	pet_id = 0, combat_id = 0;

var enemy_hp_array = [ 20 ];
var player_hp_array = [ 20 ];
var player_hp_array_fixed = [ 20 ];
var pet_hp_array = [ 20 ];
var pet_hp_array_fixed = [ 20 ];
var enemy_hp_array_fixed = [ 20 ];
var enemy_hp_div_array = [ 20 ];
var combat_order_array = [ 30 ];
var combat_ini_array = [ 30 ];

function add_enemy(){

	eid++;
	combat_id++;
	var combat_div = document.getElementById("combat_div");
	var enemy_name = document.getElementById("enemy_name").value;
	//var enemy_nd = document.getElementById("enemy_nd").value;
	var enemy_ini = document.getElementById("enemy_ini").value;
	var enemy_ca = document.getElementById("enemy_ca").value;
		combat_ini_array[combat_id - 1] = enemy_ini;
		enemy_hp = document.getElementById("enemy_hp").value;
		enemy_hp_array[eid-1] = enemy_hp;
		enemy_hp_array_fixed[eid-1] = enemy_hp;
		/*if (tormenta.checked) {
			xp = enemy_nd * 300;
			xp_aux =xp_aux + xp;
		}
		if (dungeons.checked) {
			if (enemy_nd == 1) {
				xp = 200;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 2) {
				xp = 450;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 3) {
				xp = 700;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 4) {
				xp = 1100;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 5) {
				xp = 1800;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 6) {
				xp = 2300;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 7) {
				xp = 2900;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 8) {
				xp = 3900;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 9) {
				xp = 5000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 10) {
				xp = 5900;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 11) {
				xp = 7200;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 12) {
				xp = 8400;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 13) {
				xp = 10000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 14) {
				xp = 11500;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 15) {
				xp = 13000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 16) {
				xp = 15000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 17) {
				xp = 18000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 18) {
				xp = 20000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 19) {
				xp = 22000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 20) {
				xp = 25000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 21) {
				xp = 33000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 22) {
				xp = 41000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 23) {
				xp = 50000;
				xp_aux =xp_aux + xp; 
			}if (enemy_nd == 24) {
				xp = 62000;
				xp_aux =xp_aux + xp; 
			
			}if (enemy_nd == 30) {
				xp = 155000;
				xp_aux =xp_aux + xp; 
			}

		}*/

	var br = document.createElement('br');
	

	var enemy_div = document.createElement("div");
	var e_name_h3 = document.createElement('h3');
	var e_name_text = document.createTextNode(" Inimigo: "+enemy_name);
	var e_ini_h3 = document.createElement('h3');
	var	random = 1 + Math.floor(Math.random()*20);
	var enemy_ini_aux = enemy_ini;
	enemy_ini = (+random) + (+enemy_ini);

	var e_ini_text = document.createTextNode("Iniciativa: "+ enemy_ini + " ("+random + " + "+ enemy_ini_aux +")");
	//var e_nd_h3 = document.createElement('h3');
	//var e_nd_text = document.createTextNode("ND: "+enemy_nd);
	var e_ca_text = document.createTextNode(enemy_ca);
	var ca_img = document.createElement('img');
	ca_img.src = 'images/ca.png';
	ca_img.setAttribute("class","ca_img");
	e_name_h3.style.backgroundColor = "#830000";
	e_name_h3.style.color = 'white';

		enemy_div.value = enemy_ini; // insere valor

	var button = document.createElement('div');
		hp_div = document.createElement('div');
		hp_div.setAttribute('id', 'hp_div'+eid);

	var check_button = document.createElement('img');
		check_button.src = "images/check.png";

	var hp_text = document.createTextNode(enemy_hp);
	var hp_input = document.createElement('input');
	var sub_button = document.createElement('div');

		sub_button.setAttribute('id','sub_button'+eid);
		sub_button.setAttribute('onclick', 'hp_change('+eid+');')
		sub_button.setAttribute('class', 'sub_button');
		sub_button.setAttribute('onkeypress','return event.charCode >= 48 && event.charCode <= 57');

		var ind_button = document.createElement('img');
		ind_button.setAttribute('id','ind_button'+combat_id);
		ind_button.setAttribute('onclick', 'selecionar_e(this.parentNode.id, this.id);');
		ind_button.setAttribute('class', 'ind_button');
		ind_button.src = "images/check.png";

		hp_input.setAttribute("id","damage"+eid);
		hp_input.setAttribute("type","text");
		hp_input.setAttribute("class","damage_input");

		button.setAttribute('class','removebutton');
		button.setAttribute('onclick', 'removeCurrentElement(this.parentNode)' );
		enemy_div.setAttribute('id', 'enemy_div'+eid);

	var x_img = document.createElement('img');
		x_img.src = "images/X.png";
		button.appendChild(x_img);

	var menos_img = document.createElement('img');
		menos_img.src = "images/Menos.png";
		sub_button.appendChild(menos_img);

		enemy_div.classList.add('enemy_div');
		enemy_div.classList.add('combat_order');
		hp_div.classList.add('hp_div');

		enemy_div.appendChild(button);
		enemy_div.appendChild(e_name_h3);
		e_name_h3.appendChild(e_name_text);
		enemy_div.appendChild(hp_div);
		hp_div.appendChild(hp_text);

		enemy_div.appendChild(hp_input);
		
		enemy_div.appendChild(sub_button);
		enemy_div.appendChild(ca_img);
		enemy_div.appendChild(e_ca_text);
		enemy_div.appendChild(br);
		e_ini_h3.appendChild(e_ini_text);
		//e_nd_h3.appendChild(e_nd_text);
		enemy_div.appendChild(ind_button);
		enemy_div.appendChild(e_ini_h3);
		
		//enemy_div.appendChild(e_nd_h3);
		combat_order_array[combat_id-1] = enemy_div;

	down_ordem1();

}

function add_player(){

	pid++;
	combat_id++;
	var combat_div = document.getElementById("combat_div");
	var player_name = document.getElementById("player_name").value;
	var player_ini = document.getElementById("player_ini").value;
	var player_div = document.createElement("div");
	var p_name_h3 = document.createElement('h3');
	var player_hp = document.getElementById("player_hp").value;
	var player_ca = document.getElementById("player_ca").value;
	var p_name_text = document.createTextNode(" Jogador: "+player_name);
	var p_ini_h3 = document.createElement('h3');
	var p_ini_text = document.createTextNode("Iniciativa: "+player_ini);
	var hp_div = document.createElement('div');
	var hp_input = document.createElement('input');
	hp_input.setAttribute("type",'text');
	hp_input.setAttribute('class','damage_input');
	hp_input.setAttribute('id','player_damage'+pid);
	hp_div.setAttribute('id', 'player_hp_div'+pid);
	hp_div.setAttribute('class', 'hp_div');
	player_hp_array[pid-1] = player_hp;
	player_hp_array_fixed[pid-1] = player_hp_array[pid-1];
	var br = document.createElement('br');
	p_name_h3.style.background = "#1B3292";
	p_name_h3.style.color = 'white';

		player_div.value = player_ini; // insere valor

	var button = document.createElement('div');
		combat_ini_array[combat_id - 1] = player_ini;

	var ind_button = document.createElement('img');
	ind_button.setAttribute('id','ind_button'+combat_id);
	ind_button.setAttribute('onclick', 'selecionar_e(this.parentNode.id, this.id);');
	ind_button.setAttribute('class', 'ind_button');
	ind_button.src = "images/check.png";

	var e_ca_text = document.createTextNode(player_ca);
	var ca_img = document.createElement('img');
	ca_img.src = 'images/ca.png';
	ca_img.setAttribute("class","ca_img");

	var sub_button = document.createElement('img');
	sub_button.setAttribute('id','sub_button'+pid);
	sub_button.setAttribute('onclick', 'player_hp_change('+pid+');');
	// sub_button.setAttribute('onclick', 'player_hp_change'+pid+'();');
	sub_button.setAttribute('class', 'sub_button');
	sub_button.src = "images/Menos.png";
	sub_button.setAttribute('onkeypress','return event.charCode >= 48 && event.charCode <= 57');

	var hp_text = document.createTextNode(player_hp);
		button.setAttribute('class','removebutton');
		button.setAttribute('onclick', 'removeCurrentElement(this.parentNode)' );
	var x_img = document.createElement('img');
		x_img.src = "images/X.png";
		button.appendChild(x_img);
	document.getElementById("player_name").value = '';
	document.getElementById("player_ini").value = '';
	document.getElementById("player_hp").value = '';
	document.getElementById("player_ca").value = '';
	player_div.classList.add('player_div');
	player_div.setAttribute('id', 'player_div'+pid);
	player_div.appendChild(button);
	player_div.appendChild(p_name_h3);
	p_name_h3.appendChild(p_name_text);
	player_div.appendChild(hp_div);
	player_div.appendChild(hp_input);
	player_div.appendChild(sub_button);
	player_div.appendChild(ca_img);
	player_div.appendChild(e_ca_text);
	hp_div.appendChild(hp_text);
	player_div.appendChild(br);
	p_ini_h3.appendChild(p_ini_text);
	player_div.appendChild(ind_button);
	player_div.appendChild(p_ini_h3);

	player_div.classList.add('combat_order');
	
	combat_order_array[combat_id-1] = player_div;
	down_ordem1();
	
}

function add_pet(){

	pet_id++;
	combat_id++;

	var combat_div = document.getElementById("combat_div");
	var pet_name = document.getElementById("pet_name").value;
	var pet_ini = document.getElementById("pet_ini").value;
	var pet_ca = document.getElementById("pet_ca").value;
	var pet_div = document.createElement("div");
	var p_name_h3 = document.createElement('h3');
	var p_name_text = document.createTextNode(" Ajudante: "+pet_name);
	var p_ini_h3 = document.createElement('h3');
	var p_ini_text = document.createTextNode("Iniciativa: "+pet_ini);
	var pet_hp = document.getElementById('pet_hp').value;
	var button = document.createElement('div');
	p_name_h3.style.background = "#3A801B";
	p_name_h3.style.color = "white"
		combat_ini_array[combat_id - 1] = pet_ini;
		button.setAttribute('class','removebutton');
		button.setAttribute('onclick', 'removeCurrentElement(this.parentNode)' );
		pet_div.classList.add('pet_div');
		pet_div.setAttribute('id', 'pet_div'+pet_id);
		var hp_div = document.createElement('div');
		var hp_input = document.createElement('input');
		hp_input.setAttribute("type",'text');
		hp_input.setAttribute('class','damage_input');
		hp_input.setAttribute('id','pet_damage'+pet_id);
		hp_div.setAttribute('id', 'pet_hp_div'+pet_id);
		hp_div.setAttribute('class', 'hp_div');
		pet_hp_array[pet_id-1] = pet_hp;
		pet_hp_array_fixed[pet_id-1] = pet_hp_array[pet_id-1];
		var hp_text = document.createTextNode(pet_hp);
		hp_div.appendChild(hp_text);
		var br = document.createElement('br');

		pet_div.value = pet_ini // insere valor

	var ind_button = document.createElement('img');
	ind_button.setAttribute('id','ind_button'+combat_id);
	ind_button.setAttribute('onclick', 'selecionar_e(this.parentNode.id, this.id);');
	ind_button.setAttribute('class', 'ind_button');
	ind_button.src = "images/check.png";

	var sub_button = document.createElement('img');
	sub_button.setAttribute('id','sub_button'+pet_id);
	sub_button.setAttribute('onclick', 'pet_hp_change('+pet_id+');');
	sub_button.setAttribute('class', 'sub_button');
	sub_button.src = "images/Menos.png";
	sub_button.setAttribute('onkeypress','return event.charCode >= 48 && event.charCode <= 57');

	var e_ca_text = document.createTextNode(pet_ca);
	var ca_img = document.createElement('img');
	ca_img.src = 'images/ca.png';
	ca_img.setAttribute("class","ca_img");

	var check_button = document.createElement('img');
	check_button.src = "images/check.png";

	var change_button = document.createElement('div');
		change_button.setAttribute('id','change_button'+eid);
		change_button.setAttribute('onclick', 'mudar_ordem'+pid+'();')
		change_button.setAttribute('class', 'ind_button');

	var x_img = document.createElement('img');
		x_img.src = "images/X.png";
		button.appendChild(x_img);

	document.getElementById("pet_name").value = '';
	document.getElementById("pet_ini").value = '';
	document.getElementById("pet_hp").value = '';
	document.getElementById("pet_ca").value = '';

	pet_div.appendChild(button);
	pet_div.appendChild(p_name_h3);
	p_name_h3.appendChild(p_name_text);
	pet_div.appendChild(hp_div);
	pet_div.appendChild(hp_input);
	pet_div.appendChild(sub_button);
	pet_div.appendChild(ca_img);
	pet_div.appendChild(e_ca_text)
	pet_div.appendChild(br);
	p_ini_h3.appendChild(p_ini_text);
	pet_div.appendChild(ind_button);
	pet_div.appendChild(p_ini_h3);
	pet_div.classList.add('combat_order');
	combat_order_array[combat_id-1] = pet_div;
	
	down_ordem1();

}

function combat_xp(){
	
	xp_player = xp_aux/pid;
	alert("XP do Combate\nXP total: " + xp_aux + "\nXP por Jogador: "+ xp_player);
	turno = 0;
	turn.innerHTML = "<h3>Turno: </h3>";

	xp_player = 0;
	xp_aux=0;
	xp = 0;
}
function selecionar_e(k, w){

	var x = document.getElementsByClassName("enemy_div");
    var y = document.getElementsByClassName("player_div");
    var z = document.getElementsByClassName("pet_div");
    var c = document.getElementsByClassName("ind_button");

	var i;
	for (i = 0; i < x.length; i++) {
			x[i].style.background = "#FF0000"
		}
	for (i = 0; i < y.length; i++) {
			y[i].style.background = "#335BFF"
		}
	for (i = 0; i < z.length; i++) {
			z[i].style.background = "#54E714"
		}
	for (i = 0; i < c.length; i++) {
			c[i].src = "images/check.png";
		}

	document.getElementById(k).style.background = "#4B0082";
	document.getElementById(w).src = "images/d_check.png";
	turno++;
	turn_shift();
}
function turn_shift(){
	turn = document.getElementById("turno_div");
	rodada = Math.floor(turno/combat_id);
	turn.innerHTML = "<h3>Turno: "+(rodada+1)+"</h3>";
}

function hp_change(req){

	let hp_div = document.getElementById(`hp_div${req}`);
	let damage = document.getElementById(`damage${req}`).value;

	var hp_aux = enemy_hp_array[ req-1 ];
	var hp_total = enemy_hp_array[ req-1 ];
	var hp_damage = damage;
	var hp_atual = hp_total - hp_damage;
	var hp_fixed = enemy_hp_array_fixed[ req-1 ];
		hp_total = hp_atual;
		enemy_hp_array[ req-1 ] = hp_atual;
		hp_div.innerHTML = hp_atual;
		hp_div.style.width = (hp_atual/hp_fixed)*100+"%";

}

function player_hp_change(req){

	let player_hp_div = document.getElementById(`player_hp_div${req}`);
	let player_damage = document.getElementById(`player_damage${req}`);

	var hp_aux = player_hp_array[ req-1 ];
	var hp_total = player_hp_array[ req-1 ];
	var hp_damage = player_damage.value;
	var hp_atual = hp_total - hp_damage;
	var hp_fixed = player_hp_array_fixed[ req-1 ];
		hp_total = hp_atual;
		player_hp_array[ req-1 ] = hp_atual;
		player_hp_div.innerHTML=hp_atual;
		player_hp_div.style.width = (hp_atual/hp_fixed)*100+"%";

}

function pet_hp_change(req) {

	let pet_hp_div = document.getElementById(`pet_hp_div${req}`);
	let damage = document.getElementById(`pet_damage${req}`);

	var hp_aux = pet_hp_array[ req-1 ];
	var hp_total = pet_hp_array[ req-1 ];
	var hp_damage = damage.value;
	var hp_atual = hp_total - hp_damage;
	var hp_fixed = pet_hp_array_fixed[ req-1 ];
		hp_total = hp_atual;
		pet_hp_array[ req-1 ] = hp_atual;
		pet_hp_div.innerHTML=hp_atual;
		pet_hp_div.style.width = (hp_atual/hp_fixed)*100+"%";

}

// ======= Ordem decrescente =======
function suport( a, b ){
	return a - b;
}
function down_ordem1(){
	var combat_div = document.getElementById("combat_div");
		combat_div.innerHTML = '';
	let array = [];
	let finalOrder = [];
	for ( let i = 0 ; i < combat_order_array.length ; i++ ) {
		if ( combat_order_array[( i )] ) {
			array.push(  Number( combat_order_array[( i )].value ) );
		}
	}
	array.sort( suport );
	for ( let i = combat_order_array.length ; i > 0 ; i-- ) {
		combat_order_array.forEach( function( res ) {
			if ( Number( res.value ) === array[( i - 1 )] ) {
				finalOrder.push( res );
			}
		});
	}
	finalOrder.forEach( function( res ) {
		if( res.className === 'pet_div combat_order' ||
			res.className === 'player_div combat_order' ||
			res.className === 'enemy_div combat_order'
		) {
			combat_div.append( res );
		}
	});
}
function removeCurrentElement(element) {
	let newArray = [];
	combat_order_array.forEach(function(res) {
		if ( element !== res ) {
			newArray.push(res);
		}
	});
	combat_order_array = newArray;
	down_ordem1();
}