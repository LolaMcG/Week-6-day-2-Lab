// const assert = require('assert');
// const Dinosaur = require('../models/dinosaur.js');

const Park = function (name, ticketPrice, dinosaurCollection){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = dinosaurCollection

    Park.prototype.checkLength = function(){
        return this.dinosaurCollection.length
    }

    Park.prototype.addDinosaur = function (dinosaur){
        this.dinosaurCollection.push(dinosaur)
    }

    Park.prototype.removeDinosaur = function (species){
        for (dinosaur of dinosaurCollection){
            if (dinosaur.species === species){
                const index = this.dinosaurCollection.indexOf(dinosaur)
                this.dinosaurCollection.splice(index, 1)
            }
        }
    }

    // Park.prototype.attractMost = function(){
    //     let most = 
    //     for (dinosaur of dinosaurCollection){
    //         if (dinosaur.guestsAttractedByDay)
    //     }
    // }

    Park.prototype.findDinoBySpecies = function(species){
        let dinoSpecies = []
        for (dinosaur of dinosaurCollection){
            if (dinosaur.species === species){
                dinoSpecies.push(dinosaur)
            }
        }
        return dinoSpecies
    }

    // Park.prototype.getTotalDay = function(){
    //     let total = 0
    //     for (guests of guestsAttractedPerDay){
    //         total += guests
    //     }
    // }
    // return total
}


module.exports = Park