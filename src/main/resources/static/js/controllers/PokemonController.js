app.controller('PokemonController', ['$scope','$http', function($scope,$http) {

    $scope.pokemons = [];
    $scope.types = [];
    $scope.newPokemon = {};

    $scope.resetNewPokemon = function(){
        $scope.newPokemon = {
        "name":"",
        "description":"",
        "primaryType":0,
        "secondaryType":0,
        "evolveFrom":"0"
        }
    }

    $scope.loadTypes = function(){
        $http.get('/pokemonTypes').then(function(response){
            $scope.types = response.data._embedded.pokemonTypes;
        });
    }

    $scope.loadPokemons = function(){
        $http.get('/pokemons').then(function(response){
            $scope.pokemons = response.data._embedded.pokemons;
        });
        $scope.resetNewPokemon();
    }

    $scope.send = function(){
        console.log($scope.newPokemon);
        var pokemon = {
            "name":$scope.newPokemon.name,
            "description":$scope.newPokemon.description
        };
        var primaryType = $scope.newPokemon.primaryType;
        var secondaryType = $scope.newPokemon.secondaryType;
        var evolveFrom = $scope.newPokemon.evolveFrom;
        $http.post('/pokemons',pokemon).then(function(response){
            console.log(response);
            var pokemonUrl = response.data._links.pokemon.href;
            if(primaryType!=0){
                $http.post(pokemonUrl+'/pokemonTypes','http://localhost:1414/pokemonTypes/'+primaryType,{headers:{'Content-Type':'text/uri-list'}}).then(function(response){
                    console.log(response);
                });
            }
            if(secondaryType!=0){
                $http.post(pokemonUrl+'/pokemonTypes','http://localhost:1414/pokemonTypes/'+secondaryType,{headers:{'Content-Type':'text/uri-list'}}).then(function(response){
                    console.log(response);
                });
            }
            if(evolveFrom!=0){
                $http.post(evolveFrom+'/evolutions/',pokemonUrl,{headers:{'Content-Type':'text/uri-list'}}).then(function(response){
                    console.log(response);
                });
            }
            $scope.loadPokemons();
        });
    }

    $scope.deletePokemon = function(){
        console.log($scope.deletedPokemon);
        $http.delete($scope.deletedPokemon).then(function(response){
            console.log(response);
        });
        $scope.loadPokemons();
    }

    $scope.loadPokemons();
    $scope.loadTypes();

}]);