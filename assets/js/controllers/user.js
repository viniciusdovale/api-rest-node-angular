angular.module('User', [])
	.controller('UserController', UserController)
	.controller('UserDetailsController', UserDetailsController);

	function UserController(){
		var vm = this;
		vm.form = {};
		vm.reverse = false;

		vm.titulo = "Lista de Usuários";
		vm.editing = false;
		vm.users = [
			{name: 'Vinícius do Vale', email: 'viniciusdovale@gmail.com', type: 'aluno', active: true},
			{name: 'Usuário 2', email: 'cadksj@dslkd.com', type: 'professor', active: true}
		];

		function getKeyLength () {
			return Object.keys(angular.copy(vm.users[0])).length;
		}
		vm.keysLength = getKeyLength();


		vm.orderByName = orderByName;
		function orderByName() {
			vm.predicate = 'name';
			vm.reverse = !vm.reverse;
		}
		vm.orderByEmail = orderByEmail;
		function orderByEmail() {
			vm.predicate = 'email';
			vm.reverse = !vm.reverse;
		}

		vm.add = add;
		function add(user) {
			vm.users.push(user);
		}

		vm.remove = remove;
    function remove(users) {
      vm.users = users.filter(function(el){ return !el.selecionado });
    }

		vm.edit = edit;
    function edit(user, index) {
      vm.form = angular.copy(user);
      vm.form.index = index;
      vm.editing = true;
    }

		vm.save = save;
    function save(user) {
      function saveUser(el, i){
        if(i === user.index) {
          delete user.index;
          return angular.copy(user);
        }
        return el;
      }
      var users = vm.users.map(saveUser);
      vm.users = users;
      vm.editing = false;
    }

    vm.submitForm = submitForm;
    function submitForm(user) {
      add(user);
    }
	}

	function UserDetailsController($routeParams){

		var vm = this;
		vm.routeParams = $routeParams;
		vm.form = {};
		vm.reverse = false;

		vm.titulo = "Lista de Usuários";
		vm.editing = false;
		vm.users = [
			{name: 'Vinícius do Vale', email: 'viniciusdovale@gmail.com', type: 'aluno', active: true},
			{name: 'Usuário 2', email: 'cadksj@dslkd.com', type: 'professor', active: true}
		];

		function getKeyLength () {
			return Object.keys(angular.copy(vm.users[0])).length;
		}
		vm.keysLength = getKeyLength();


		vm.orderByName = orderByName;
		function orderByName() {
			vm.predicate = 'name';
			vm.reverse = !vm.reverse;
		}
		vm.orderByEmail = orderByEmail;
		function orderByEmail() {
			vm.predicate = 'email';
			vm.reverse = !vm.reverse;
		}

		vm.add = add;
		function add(user) {
			vm.users.push(user);
		}

		vm.remove = remove;
    function remove(users) {
      vm.users = users.filter(function(el){ return !el.selecionado });
    }

		vm.edit = edit;
    function edit(user, index) {
      vm.form = angular.copy(user);
      vm.form.index = index;
      vm.editing = true;
    }

		vm.save = save;
    function save(user) {
      function saveUser(el, i){
        if(i === user.index) {
          delete user.index;
          return angular.copy(user);
        }
        return el;
      }
      var users = vm.users.map(saveUser);
      vm.users = users;
      vm.editing = false;
    }

    vm.submitForm = submitForm;
    function submitForm(user) {
      add(user);
    }
	}
		