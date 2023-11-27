let ques = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let next = document.getElementById("next");
var clock = new Audio("clock.mp3");
var wrong = new Audio("wrong.mp3");
var right = new Audio("right.mp3");

let khel = "off";
let start = document.querySelector(".start");
start.addEventListener("click",function () {
       khel = "on";
       console.log("game started");
})

function timeleft() {
       let x = 0;
       if (x=0, x!=20, x++) {
             setInterval(() => {
              let tl = document.getElementById("time");
              tl.innerText = "Time Left:",20-x;
             }, 1000);
       }
}
 let cinema = document.getElementById("cinema");
 cinema.addEventListener("click", function() {
       if(khel == "on") {
              timeleft();
              console.log("cinema bbutton is running");
              ques.innerHTML = "<b><i> QUESTION 1) Which of the following actors play the famous charactor THOR in Avengers ?</i></b><br>";
              opt1.innerHTML = "<i>1.Tom Cruise</i>"
              opt2.innerHTML = "<i>2.Chris Hemsworth</i>"
              opt3.innerHTML = "<i>3.Chris Evans</i>"
              opt4.innerHTML = "<i>4.Robert Downey Jr.</i>"
                     clock.play();
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt2.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) When did the renowned series FRIENDS started ?</i></b><br>";
                     opt1.innerHTML = "<i>1.1994</i>"
                     opt2.innerHTML = "<i>2.1998</i>"
                     opt3.innerHTML = "<i>3.2001</i>"
                     opt4.innerHTML = "<i>4.1996</i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) What is the name of the monster in the second season of STRANGER THINGS?</i></b><br>";
                            opt1.innerHTML = "<i>1.Demogorgon</i>"
                            opt2.innerHTML = "<i>2.Vecna</i>"
                            opt3.innerHTML = "<i>3.Mind flayer</i>"
                            opt4.innerHTML = "<i>4.Demoragon victus</i>"
                            clock.muted = false;
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) In the  series SHADOW AND BONE, the darking uses which move to save alina from the fjerda attack ?</i></b><br>";
                                   opt1.innerHTML = "<i>1.The Slice</i>"
                                   opt2.innerHTML = "<i>2.The Clip</i>"
                                   opt3.innerHTML = "<i>3.The Cut</i>"
                                   opt4.innerHTML = "<i>4.The Splint victus</i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) In The Wheel of time, which special roles did Blue Ajah had?</i></b><br>";
                                          opt1.innerHTML = "<i>1.Military & frontlines in wars</i>"
                                          opt2.innerHTML = "<i>2.Healing Powers</i>"
                                          opt3.innerHTML = "<i>3.Focuses on misuse of One power</i>"
                                          opt4.innerHTML = "<i>4.Righteous causes & justice</i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) What is the fourth part of HARRY POTTER ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1.Goblet of Fire</i>"
                                                 opt2.innerHTML = "<i>2.The order of the Phoenix</i>"
                                                 opt3.innerHTML = "<i>3.Soccer's Stone</i>"
                                                 opt4.innerHTML = "<i>4.The half blood Prince</i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
                                                 } 
}}}}}}}}}}}})

let music = document.getElementById("music");
 music.addEventListener("click", function() {
       if(khel == "on") {
              console.log("music button is running");
              ques.innerHTML = "<b><i> QUESTION 1) Which of the following songs is the most popular song on youtube ?</i></b><br>";
              opt1.innerHTML = "<i>1.Despacito</i>"
              opt2.innerHTML = "<i>2.Waka Waka</i>"
              opt3.innerHTML = "<i>3.Shape of you</i>"
              opt4.innerHTML = "<i>4.Gangnam Style</i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Which singer holds the record of the longest song which is of 138 hr 41 min 20 sec?</i></b><br>";
                     opt1.innerHTML = "<i>1.Timothy hill</i>"
                     opt2.innerHTML = "<i>2.AR Rahman</i>"
                     opt3.innerHTML = "<i>3.Joh T. Wurzer</i>"
                     opt4.innerHTML = "<i>4.Jagadeesh pillai</i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) Which of these songs is the most streamed one on SPOTIFY ?</i></b><br>";
                            opt1.innerHTML = "<i>1.Dance Monkey</i>"
                            opt2.innerHTML = "<i>2.Someone you loved</i>"
                            opt3.innerHTML = "<i>3.Blinding lights</i>"
                            opt4.innerHTML = "<i>4.Lovestory</i>"
                            clock.muted = false;
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) Following are the top mostsongs in india, which one of them is the highest viewed ?</i></b><br>";
                                   opt1.innerHTML = "<i>1.Kala Chashma</i>"
                                   opt2.innerHTML = "<i>2.52 Gaj ka daman</i>"
                                   opt3.innerHTML = "<i>3.Dil diya gallan</i>"
                                   opt4.innerHTML = "<i>4.Hanuman Chalisa</i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) In which of these songs , these lyrics are present - YOUVE NEVER SEEN IT LOOK SO EASY ?</i></b><br>";
                                          opt1.innerHTML = "<i>1.Perfect - Ed sheeran</i>"
                                          opt2.innerHTML = "<i>2.I dont wanna live forever - Zayn malik</i>"
                                          opt3.innerHTML = "<i>3.Drag me Down - One direction</i>"
                                          opt4.innerHTML = "<i>4.What makes you beautiful - One Direction</i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6)In which year THE BEATLES was formed ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1.1960</i>"
                                                 opt2.innerHTML = "<i>2.1940</i>"
                                                 opt3.innerHTML = "<i>3.1980</i>"
                                                 opt4.innerHTML = "<i>4.1920</i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
                                                 } 
}}}}}}}}}}}})
 let games = document.getElementById("games");
games.addEventListener("click", function() {
      if(khel == "on") {
             console.log("music button is running");
             ques.innerHTML = "<b><i> QUESTION 1) Which of the following games is the most topmost game in the world ?</i></b><br>";
             opt1.innerHTML = "<i>1.Fortnite</i>"
             opt2.innerHTML = "<i>2.Minecraft</i>"
             opt3.innerHTML = "<i>3.Grand Theft Auto</i>"
             opt4.innerHTML = "<i>4.Call of Duty</i>"
                    clock.play();
             opt1.onclick = function () {
                    clock.muted = true;
                    wrong.play();
             }
             opt3.onclick = function () {
                    clock.muted = true;
                    wrong.play();
             }
             opt4.onclick = function () {
                    clock.muted = true;
                    wrong.play();
             }
             opt2.onclick = function () {
                    clock.muted = true;
                    right.play();
                    next.onclick = function () {
                    ques.innerHTML = "<b><i> QUESTION 2) Which of these is NOT a Grand Theft Auto game ?</i></b><br>";
                    opt1.innerHTML = "<i>1.Grand Theft Auto: Vice City</i>"
                    opt2.innerHTML = "<i>2.Grand Theft Auto: San Andreas</i>"
                    opt3.innerHTML = "<i>3.Grand Theft Auto: Liberty City</i>"
                    opt4.innerHTML = "<i>4. Grand Theft Auto: Empire State</i>"
                    clock.muted = false;
                    opt2.onclick = function () { 
                           clock.muted = true;
                           wrong.play();
                    }
                    opt3.onclick = function () {
                           clock.muted = true;
                           wrong.play();
                    }
                    opt1.onclick = function () {
                           clock.muted = true;
                           wrong.play();
                    }
                    opt4.onclick = function () {
                           clock.muted = true;
                           right.play();
                           next.onclick = function () { 
                           ques.innerHTML = "<b><i> QUESTION 3) Which video game shattered the record for most sales in 24 hours, making over $800 million? ?</i></b><br>";
                           opt1.innerHTML = "<i>1. Fifa 18</i>"
                           opt2.innerHTML = "<i>2.Grand Theft Grand Theft Auto V</i>"
                           opt3.innerHTML = "<i>3.Call of Duty: Black Ops</i>"
                           opt4.innerHTML = "<i>4.Cyberpunk 2077</i>"
                           clock.muted = false;
                           opt1.onclick = function () {
                                  clock.muted = true;
                                  wrong.play();
                           }
                           opt3.onclick = function () {
                                  clock.muted = true;
                                  wrong.play();
                           }
                           opt4.onclick = function () {
                                  clock.muted = true;
                                  wrong.play();
                           }
                           opt2.onclick = function () {
                                  clock.muted = true;
                                  right.play();
                                  next.onclick = function () {
                                  ques.innerHTML = "<b><i> QUESTION 4) In what year was the first video game invented ?</i></b><br>";
                                  opt1.innerHTML = "<i>1.1958</i>"
                                  opt2.innerHTML = "<i>2.1988</i>"
                                  opt3.innerHTML = "<i>3.1948</i>"
                                  opt4.innerHTML = "<i>4.1968</i>"
                                  var clock = new Audio("clock.mp3");
                                   clock.play();
                                  opt4.onclick = function () {
                                         clock.muted = true;
                                         wrong.play();
                                  }
                                  opt2.onclick = function () {
                                         clock.muted = true;
                                         wrong.play();
                                  }
                                  opt3.onclick = function () {
                                         clock.muted = true;
                                         wrong.play();
                                  }
                                  opt1.onclick = function () {
                                         clock.muted = true;
                                         right.play();
                                         next.onclick = function () {
                                         ques.innerHTML = "<b><i> QUESTION 5) Initially what was the game MINECRAFT called ?</i></b><br>";
                                         opt1.innerHTML = "<i>1.Forest game</i>"
                                         opt2.innerHTML = "<i>2.Craft Mania</i>"
                                         opt3.innerHTML = "<i>3.Cave game</i>"
                                         opt4.innerHTML = "<i>4.RealmCraft</i>"
                                         clock.muted = false;
                                         opt1.onclick = function () {
                                                clock.muted = true;
                                                wrong.play();
                                         }
                                         opt2.onclick = function () {
                                                clock.muted = true;
                                                wrong.play();
                                         }
                                         opt4.onclick = function () {
                                                clock.muted = true;
                                                wrong.play();
                                         }
                                         opt3.onclick = function () {
                                                clock.muted = true;
                                                right.play();
                                                next.onclick = function () {
                                                ques.innerHTML = "<b><i> QUESTION 6)What is the theme song for the 4th Anniversary of Free Fire ?</i></b><br>";
                                                opt1.innerHTML = "<i>1.Reunion</i>"
                                                opt2.innerHTML = "<i>2.Time for action</i>"
                                                opt3.innerHTML = "<i>3.Legendary cobra</i>"
                                                opt4.innerHTML = "<i>4.im on fire</i>"
                                                clock.muted = false;
                                                opt4.onclick = function () {
                                                       clock.muted = true;
                                                       wrong.play();
                                                }
                                                opt2.onclick = function () {
                                                       clock.muted = true;
                                                       wrong.play();
                                                }
                                                opt3.onclick = function () {
                                                       clock.muted = true;
                                                       wrong.play();
                                                }
                                                opt1.onclick = function () {
                                                       clock.muted = true;
                                                       right.play();
}}}}}}}}}}}}})                                                
 let food = document.getElementById("food");
food.addEventListener("click", function() {
       if(khel == "on") {
              console.log("food button is running");
              ques.innerHTML = "<b><i> QUESTION 1) What oil is used for cooking in South India ?</i></b><br>";
              opt1.innerHTML = "<i>1.Coconut oil</i>"
              opt2.innerHTML = "<i>2.Sunflower Oil</i>"
              opt3.innerHTML = "<i>3.Olive Oil</i>"
              opt4.innerHTML = "<i>4.None of these</i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Which is the national vegetable of India? ?</i></b><br>";
                     opt1.innerHTML = "<i>1.Lady finger</i>"
                     opt2.innerHTML = "<i>2.Brinjal</i>"
                     opt3.innerHTML = "<i>3.Potato</i>"
                     opt4.innerHTML = "<i>4.Pumpkin</i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) Which Vitamins are rich in Carrots?</i></b><br>";
                            opt1.innerHTML = "<i>1.Vitamin B6</i>"
                            opt2.innerHTML = "<i>2.Vitamin K1</i>"
                            opt3.innerHTML = "<i>3. Vitamin A</i>"
                            opt4.innerHTML = "<i>4.all of above</i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) Where does coffee originate from?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Canada</i>"
                                   opt2.innerHTML = "<i>2.Italy</i>"
                                   opt3.innerHTML = "<i>3.Belgium</i>"
                                   opt4.innerHTML = "<i>4.Ethiopia</i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5)Which of the famous food of Odisha? </i></b><br>";
                                          opt1.innerHTML = "<i>1.Dosa</i>"
                                          opt2.innerHTML = "<i>2.Saaga</i>"
                                          opt3.innerHTML = "<i>3.Dal Bati</i>"
                                          opt4.innerHTML = "<i>4.Rogan josh</i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6)What country did tacos orginate from ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1.Mexico</i>"
                                                 opt2.innerHTML = "<i>2.Canada</i>"
                                                 opt3.innerHTML = "<i>3.Pakistan</i>"
                                                 opt4.innerHTML = "<i>4.Brazil</i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})                      
 let geo = document.getElementById("geography");
 geo.addEventListener("click", function() {
       if(khel == "on") {
              console.log("food button is running");
              ques.innerHTML = "<b><i> QUESTION 1) What America city is the Golden Gate Bridge located in ?</i></b><br>";
              opt1.innerHTML = "<i>1.DC Washington </i>"
              opt2.innerHTML = "<i>2. Mexico City </i>"
              opt3.innerHTML = "<i>3. New York City </i>"
              opt4.innerHTML = "<i>4. San Francisco </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) What US sate is home to no documented poisionous snakes ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Ottawa </i>"
                     opt2.innerHTML = "<i>2. North Carolina </i>"
                     opt3.innerHTML = "<i>3. Greenland </i>"
                     opt4.innerHTML = "<i>4. Alaska </i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) What is the capital of Thailand ?</i></b><br>";
                            opt1.innerHTML = "<i>1. Ottayi </i>"
                            opt2.innerHTML = "<i>2. Busan </i>"
                            opt3.innerHTML = "<i>3. Phuket </i>"
                            opt4.innerHTML = "<i>4. Bangkok </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) What country the most natural lakes ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Africa </i>"
                                   opt2.innerHTML = "<i>2. Canada </i>"
                                   opt3.innerHTML = "<i>3. Switzerland </i>"
                                   opt4.innerHTML = "<i>4. India </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) Which country is also called The Netherlands ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Atlanta </i>"
                                          opt2.innerHTML = "<i>2. Slovakia </i>"
                                          opt3.innerHTML = "<i>3. Brisbane </i>"
                                          opt4.innerHTML = "<i>4. Holland </i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) What season does Australia experience in december ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Summer</i>"
                                                 opt2.innerHTML = "<i>2. Winter </i>"
                                                 opt3.innerHTML = "<i>3. Spring </i>"
                                                 opt4.innerHTML = "<i>4. Monsoon </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})

 let sp = document.getElementById("sports");
 sp.addEventListener("click", function() {
       if(khel == "on") {
              console.log("food button is running");
              ques.innerHTML = "<b><i> QUESTION 1) For which of the following games / sports the term ring is not used for ground / space ?</i></b><br>";
              opt1.innerHTML = "<i>1.Basebell</i>"
              opt2.innerHTML = "<i>2.Gymnastics</i>"
              opt3.innerHTML = "<i>3.Boxing</i>"
              opt4.innerHTML = "<i>4.Ice hockey</i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) The word gambit is realted to which  of the following sports ?</i></b><br>";
                     opt1.innerHTML = "<i>1.Tbale tennis</i>"
                     opt2.innerHTML = "<i>2.Polo</i>"
                     opt3.innerHTML = "<i>3.Carrom</i>"
                     opt4.innerHTML = "<i>4.Chess</i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) What is the duration to test match ?</i></b><br>";
                            opt1.innerHTML = "<i>1. 3 Days </i>"
                            opt2.innerHTML = "<i>2. 4 Days </i>"
                            opt3.innerHTML = "<i>3. 1 Day </i>"
                            opt4.innerHTML = "<i>4. 5 Days </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) What are the two badminton players to ever win an olympic medal ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. PV Sindhu and Sania Nehwal </i>"
                                   opt2.innerHTML = "<i>2.PV Sindhu and Tanvi Lad </i>"
                                   opt3.innerHTML = "<i>3. Rituparna Das and Saina Nehwal </i>"
                                   opt4.innerHTML = "<i>4. Saina Nehwal and Tanvi Lad </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) What is the motto of commonwealth Games Federation? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Humanity above all </i>"
                                          opt2.innerHTML = "<i>2. Humanity, Equality, Destiny </i>"
                                          opt3.innerHTML = "<i>3. Equality  is Supreme </i>"
                                          opt4.innerHTML = "<i>4. Humanity at all Costs </i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Who has become the first Indian fencer to quality for Tokyo Olympic Games ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Kavitha Devi </i>"
                                                 opt2.innerHTML = "<i>2. Daina Devi </i>"
                                                 opt3.innerHTML = "<i>3. Bhavani Davi </i>"
                                                 opt4.innerHTML = "<i>4. Kaushik Vedika </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let history = document.getElementById("history");
 history.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) When was the Indian National song sung for the first time ?</i></b><br>";
              opt1.innerHTML = "<i>1. 1896 /i>"
              opt2.innerHTML = "<i>2. 1919 </i>"
              opt3.innerHTML = "<i>3.1847 </i>"
              opt4.innerHTML = "<i>4. None of the Above </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) In the third battle of panipat who defeated Marathas ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Mughals </i>"
                     opt2.innerHTML = "<i>2. British Army </i>"
                     opt3.innerHTML = "<i>3. Germans </i>"
                     opt4.innerHTML = "<i>4. Afgans </i>"
                     clock.muted = false;
                     opt2.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt4.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) What was Hitler's title when he was elected ?</i></b><br>";
                            opt1.innerHTML = "<i>1. 1990 </i>"
                            opt2.innerHTML = "<i>2. 1950 </i>"
                            opt3.innerHTML = "<i>3. 1970 </i>"
                            opt4.innerHTML = "<i>4. 1933 </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) When is the hiroshima Day observed ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. August 3 </i>"
                                   opt2.innerHTML = "<i>2. December 10 </i>"
                                   opt3.innerHTML = "<i>3. January 14 </i>"
                                   opt4.innerHTML = "<i>4. September 4 </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) What is the full form of ISI Pakistan ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Inter Solution Intelligence </i>"
                                          opt2.innerHTML = "<i>2. Inter Service Intelligence </i>"
                                          opt3.innerHTML = "<i>3. Inter Surgical Improvement </i>"
                                          opt4.innerHTML = "<i>4. International Survey </i>"
                                          clock.muted = false;
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Mount Everest is named after ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. The King of England </i>"
                                                 opt2.innerHTML = "<i>2. The first climber of the peak </i>"
                                                 opt3.innerHTML = "<i>3. A surveyor General of indian </i>"
                                                 opt4.innerHTML = "<i>4. The Viceroy of India </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let space = document.getElementById("space");
 space.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) Which planet is named after the Roman god of war ?</i></b><br>";
              opt1.innerHTML = "<i>1. Mars </i>"
              opt2.innerHTML = "<i>2. Jupiter </i>"
              opt3.innerHTML = "<i>3. Venus </i>"
              opt4.innerHTML = "<i>4. Moon </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Which planet has a day which lasts eight months ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Saturn </i>"
                     opt2.innerHTML = "<i>2. Venus </i>"
                     opt3.innerHTML = "<i>3. Mars </i>"
                     opt4.innerHTML = "<i>4. Jupiter </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) Who was the first man in space ?</i></b><br>";
                            opt1.innerHTML = "<i>1. William Starbuck </i>"
                            opt2.innerHTML = "<i>2. Niel Armstrong </i>"
                            opt3.innerHTML = "<i>3. Ryan Smith </i>"
                            opt4.innerHTML = "<i>4. Yuri Gagarin </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) What name was given to the invisible material once thought to occupy all space ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Ether </i>"
                                   opt2.innerHTML = "<i>2. Nebula </i>"
                                   opt3.innerHTML = "<i>3. Asper </i>"
                                   opt4.innerHTML = "<i>4. Black hole </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) What planet is the densest ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Earth </i>"
                                          opt2.innerHTML = "<i>2. Mars </i>"
                                          opt3.innerHTML = "<i>3. Mercury </i>"
                                          opt4.innerHTML = "<i>4. Neptune </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Who was the first living creature in Space ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Laika, a dog on board the Sputnik 2 </i>"
                                                 opt2.innerHTML = "<i>2. Able, a rhesus macaque the Jupiter Am-18 </i>"
                                                 opt3.innerHTML = "<i>3. Albert II, U.S. V-2 sounding rocket </i>"
                                                 opt4.innerHTML = "<i>4. Ash, a chimpanzee boeeng-19 spacecraft </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let plant = document.getElementById("plants");
 plant.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) Approx how many  yrs can an iak tree live for ?</i></b><br>";
              opt1.innerHTML = "<i>1. Mars </i>"
              opt2.innerHTML = "<i>2. Jupiter </i>"
              opt3.innerHTML = "<i>3. Venus </i>"
              opt4.innerHTML = "<i>4. Moon </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Apricots, apples, peaches and strawberries in the same plant family with a flower ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Saturn </i>"
                     opt2.innerHTML = "<i>2. Venus </i>"
                     opt3.innerHTML = "<i>3. Mars </i>"
                     opt4.innerHTML = "<i>4. Jupiter </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) Where can we find upto 85 percent of plant life ?</i></b><br>";
                            opt1.innerHTML = "<i>1. In Africa </i>"
                            opt2.innerHTML = "<i>2. In Oceans </i>"
                            opt3.innerHTML = "<i>3. In Rainforests </i>"
                            opt4.innerHTML = "<i>4. In Desert </i>"
                            clock.muted = false;
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) Which of the following is not a meat eating plant ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Horsetail </i>"
                                   opt2.innerHTML = "<i>2. Venus flytrap </i>"
                                   opt3.innerHTML = "<i>3. Pitcher plant </i>"
                                   opt4.innerHTML = "<i>4. Sundew plant </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) What is the most produced grain plant in the world ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. corn </i>"
                                          opt2.innerHTML = "<i>2. wheat </i>"
                                          opt3.innerHTML = "<i>3. Barley </i>"
                                          opt4.innerHTML = "<i>4. Rice </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Which country has its national flower as Rose ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. China </i>"
                                                 opt2.innerHTML = "<i>2. Switzerland </i>"
                                                 opt3.innerHTML = "<i>3. Scotland </i>"
                                                 opt4.innerHTML = "<i>4. England </i>"
                                                 clock.muted = false;
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let animals = document.getElementById("animals");
 animals.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) What animal has the highest blood pressure ?</i></b><br>";
              opt1.innerHTML = "<i>1. Bear </i>"
              opt2.innerHTML = "<i>2. Penguin </i>"
              opt3.innerHTML = "<i>3. Giraffe </i>"
              opt4.innerHTML = "<i>4. Monkey </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Age of which animal can be determined by its nose ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Lion </i>"
                     opt2.innerHTML = "<i>2. Dog </i>"
                     opt3.innerHTML = "<i>3. Elephant </i>"
                     opt4.innerHTML = "<i>4. Mouse </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3) How far away can a wolf smell its prey ?</i></b><br>";
                            opt1.innerHTML = "<i>1. Upto Half Kilometer </i>"
                            opt2.innerHTML = "<i>2. Upto one Kilometer </i>"
                            opt3.innerHTML = "<i>3. Upto Two Kilometers </i>"
                            opt4.innerHTML = "<i>4. Upto Three Kilometers </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) Which insect has the largest population in the world ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Wasp </i>"
                                   opt2.innerHTML = "<i>2. Cockroach </i>"
                                   opt3.innerHTML = "<i>3. Ants </i>"
                                   opt4.innerHTML = "<i>4. Mosquitos </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) Female horse is known as ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Mare </i>"
                                          opt2.innerHTML = "<i>2. Doe </i>"
                                          opt3.innerHTML = "<i>3. Horseni </i>"
                                          opt4.innerHTML = "<i>4. Sow </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) WHow many teeth can a crocodile have over its lifetime? ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Upto 400 </i>"
                                                 opt2.innerHTML = "<i>2. Upto 2,000 </i>"
                                                 opt3.innerHTML = "<i>3. Upto 4,000 </i>"
                                                 opt4.innerHTML = "<i>4. upto 600 </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let myth = document.getElementById("myth");
 myth.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) Sati (wife of Lord Shiva) was the daughter of ?</i></b><br>";
              opt1.innerHTML = "<i>1. Kubera </i>"
              opt2.innerHTML = "<i>2. Himavan </i>"
              opt3.innerHTML = "<i>3. Daksha Prajapati </i>"
              opt4.innerHTML = "<i>4. None of the Above </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) What was the name of Arjuna in the thirteenth year of his exile at King Viratas Kingdom? ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Uttara </i>"
                     opt2.innerHTML = "<i>2. Brihannala </i>"
                     opt3.innerHTML = "<i>3. Urvashi </i>"
                     opt4.innerHTML = "<i>4. Sathyavathi </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3)  Who has killed the demon Bakasur ?</i></b><br>";
                            opt1.innerHTML = "<i>1.  Arjun </i>"
                            opt2.innerHTML = "<i>2. Shri Ram </i>"
                            opt3.innerHTML = "<i>3. Hanuman </i>"
                            opt4.innerHTML = "<i>4. Bhim </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) What is the name of the only sister of 100 Kaurav brothers ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Dussala </i>"
                                   opt2.innerHTML = "<i>2. Nayantara </i>"
                                   opt3.innerHTML = "<i>3. Ulupi </i>"
                                   opt4.innerHTML = "<i>4. Hidimba </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) According to Hindu mythology who invented the musical instrument Veena ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Vishnu </i>"
                                          opt2.innerHTML = "<i>2. Saraswati </i>"
                                          opt3.innerHTML = "<i>3. Narad </i>"
                                          opt4.innerHTML = "<i>4. Brahma </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Which one of the below is not immortal according to Hindu mythology ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Valmiki </i>"
                                                 opt2.innerHTML = "<i>2. Bali </i>"
                                                 opt3.innerHTML = "<i>3. Hanuman </i>"
                                                 opt4.innerHTML = "<i>4. Pashuram </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let nature = document.getElementById("nature");
 nature.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) How old is the worlds oldest tree ?</i></b><br>";
              opt1.innerHTML = "<i>1. Almost 3100 years </i>"
              opt2.innerHTML = "<i>2. Almost 4100 years </i>"
              opt3.innerHTML = "<i>3. Almost 5100 years </i>"
              opt4.innerHTML = "<i>4. Almost 6100 years </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) Where can you find the Angel Falls, the highest waterfall in the world ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Argentina </i>"
                     opt2.innerHTML = "<i>2. Venezula </i>"
                     opt3.innerHTML = "<i>3. Mexico </i>"
                     opt4.innerHTML = "<i>4. South africa </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3)  Up to approximately how much of the worlds oxygen is produced by the ocean? ?</i></b><br>";
                            opt1.innerHTML = "<i>1. 10% </i>"
                            opt2.innerHTML = "<i>2. 30% </i>"
                            opt3.innerHTML = "<i>3. 50% </i>"
                            opt4.innerHTML = "<i>4. 80% </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) When did dinosaurs go extinct? ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Dussala </i>"
                                   opt2.innerHTML = "<i>2. Nayantara </i>"
                                   opt3.innerHTML = "<i>3. Ulupi </i>"
                                   opt4.innerHTML = "<i>4. Hidimba </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) What is the earths longest living vertebrate ? ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Greenland Shark </i>"
                                          opt2.innerHTML = "<i>2. Humpback Whale </i>"
                                          opt3.innerHTML = "<i>3. Tortoise </i>"
                                          opt4.innerHTML = "<i>4. Koi fish </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) How much of the worlds surface is covered by water? ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Approx 65% </i>"
                                                 opt2.innerHTML = "<i>2. Approx 75% </i>"
                                                 opt3.innerHTML = "<i>3. Approx 68% </i>"
                                                 opt4.innerHTML = "<i>4. Approx 71% </i>"
                                                 clock.muted = false;
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let army = document.getElementById("army");
 army.addEventListener("click", function() {
       if(khel == "on") {
              ques.innerHTML = "<b><i> QUESTION 1) You give me blood, I will give you freedom Whose slogan was that? ?</i></b><br>";
              opt1.innerHTML = "<i>1. Subhash Chandra Bose </i>"
              opt2.innerHTML = "<i>2. Mahatma Gandhi </i>"
              opt3.innerHTML = "<i>3. hyamlal Gupta Councilor </i>"
              opt4.innerHTML = "<i>4. Savarkar </i>"
                     clock.play();
              opt2.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt4.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt3.onclick = function () {
                     clock.muted = true;
                     wrong.play();
              }
              opt1.onclick = function () {
                     clock.muted = true;
                     right.play();
                     next.onclick = function () {
                     ques.innerHTML = "<b><i> QUESTION 2) What was the name of Arjuna in the thirteenth year of his exile at King Viratas Kingdom? ?</i></b><br>";
                     opt1.innerHTML = "<i>1. Uttara </i>"
                     opt2.innerHTML = "<i>2. Brihannala </i>"
                     opt3.innerHTML = "<i>3. Urvashi </i>"
                     opt4.innerHTML = "<i>4. Sathyavathi </i>"
                     clock.muted = false;
                     opt4.onclick = function () { 
                            clock.muted = true;
                            wrong.play();
                     }
                     opt3.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt1.onclick = function () {
                            clock.muted = true;
                            wrong.play();
                     }
                     opt2.onclick = function () {
                            clock.muted = true;
                            right.play();
                            next.onclick = function () { 
                            ques.innerHTML = "<b><i> QUESTION 3)  Who has killed the demon Bakasur ?</i></b><br>";
                            opt1.innerHTML = "<i>1.  Arjun </i>"
                            opt2.innerHTML = "<i>2. Shri Ram </i>"
                            opt3.innerHTML = "<i>3. Hanuman </i>"
                            opt4.innerHTML = "<i>4. Bhim </i>"
                            clock.muted = false;
                            opt2.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt1.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt3.onclick = function () {
                                   clock.muted = true;
                                   wrong.play();
                            }
                            opt4.onclick = function () {
                                   clock.muted = true;
                                   right.play();
                                   next.onclick = function () {
                                   ques.innerHTML = "<b><i> QUESTION 4) What is the name of the only sister of 100 Kaurav brothers ?</i></b><br>";
                                   opt1.innerHTML = "<i>1. Dussala </i>"
                                   opt2.innerHTML = "<i>2. Nayantara </i>"
                                   opt3.innerHTML = "<i>3. Ulupi </i>"
                                   opt4.innerHTML = "<i>4. Hidimba </i>"
                                   var clock = new Audio("clock.mp3");
                                   clock.play();
                                   opt4.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt2.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt3.onclick = function () {
                                          clock.muted = true;
                                          wrong.play();
                                   }
                                   opt1.onclick = function () {
                                          clock.muted = true;
                                          right.play();
                                          next.onclick = function () {
                                          ques.innerHTML = "<b><i> QUESTION 5) According to Hindu mythology who invented the musical instrument Veena ? </i></b><br>";
                                          opt1.innerHTML = "<i>1. Vishnu </i>"
                                          opt2.innerHTML = "<i>2. Saraswati </i>"
                                          opt3.innerHTML = "<i>3. Narad </i>"
                                          opt4.innerHTML = "<i>4. Brahma </i>"
                                          clock.muted = false;
                                          opt2.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt1.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt4.onclick = function () {
                                                 clock.muted = true;
                                                 wrong.play();
                                          }
                                          opt3.onclick = function () {
                                                 clock.muted = true;
                                                 right.play();
                                                 next.onclick = function () {
                                                 ques.innerHTML = "<b><i> QUESTION 6) Which one of the below is not immortal according to Hindu mythology ?</i></b><br>";
                                                 opt1.innerHTML = "<i>1. Valmiki </i>"
                                                 opt2.innerHTML = "<i>2. Bali </i>"
                                                 opt3.innerHTML = "<i>3. Hanuman </i>"
                                                 opt4.innerHTML = "<i>4. Pashuram </i>"
                                                 clock.muted = false;
                                                 opt4.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt2.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt3.onclick = function () {
                                                        clock.muted = true;
                                                        wrong.play();
                                                 }
                                                 opt1.onclick = function () {
                                                        clock.muted = true;
                                                        right.play();
 }}}}}}}}}}}}})
 let science = document.getElementById("science");
 let brands = document.getElementById("brands");
