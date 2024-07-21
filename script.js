const abilities =[    { "ability": "Alpha Strike", "champion": "Master Yi", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/AlphaStrike.png" },
{ "ability": "Wuju Style", "champion": "Master Yi", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/WujuStyle.png" },
{ "ability": "Meditate", "champion": "Master Yi", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/Meditate.png" },
{ "ability": "Highlander", "champion": "Master Yi", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/Highlander.png" },
{ "ability": "Abyssal Voyage", "champion": "Tahm Kench", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6a/Tahm_Kench_Abyssal_Voyage.png/revision/latest?cb=20150623185325" },
{ "ability": "Tongue Lash", "champion": "Tahm Kench", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Tahm_Kench_Tongue_Lash.png/revision/latest?cb=20150623185326" },
{ "ability": "Devour", "champion": "Tahm Kench", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/70/Tahm_Kench_Devour.png/revision/latest?cb=20150623185326" },
{ "ability": "Thick Skin", "champion": "Tahm Kench", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c2/Tahm_Kench_Thick_Skin.png/revision/latest?cb=20150623185325" },
{ "ability": "Eclipse", "champion": "Leona", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ee/Leona_Eclipse.png/revision/latest?cb=20230830010727" },
{ "ability": "Shield of Daybreak", "champion": "Leona", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Leona_Shield_of_Daybreak.png/revision/latest?cb=20230830010727" },
{ "ability": "Solar Flare", "champion": "Leona", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/4/48/Leona_Solar_Flare.png/revision/latest?cb=20230830010728" },
{ "ability": "Rocket Grab", "champion": "Blitzcrank", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/ac/Blitzcrank_Rocket_Grab.png/revision/latest?cb=20230830003051" },
{ "ability": "Overdrive", "champion": "Blitzcrank", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e9/Blitzcrank_Overdrive.png/revision/latest?cb=20230830003109" },
{ "ability": "Power Fist", "champion": "Blitzcrank", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/5/59/Blitzcrank_Power_Fist.png/revision/latest?cb=20230830003119" },
{ "ability": "Static Field", "champion": "Blitzcrank", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Blitzcrank_Static_Field.png/revision/latest?cb=20230830003100" },
{ "ability": "Arcane Shift", "champion": "Ezreal", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/da/Ezreal_Arcane_Shift.png/revision/latest?cb=20180925213439" },
{ "ability": "Mystic Shot", "champion": "Ezreal", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3e/Ezreal_Mystic_Shot.png/revision/latest?cb=20180925213609" },
{ "ability": "Essence Flux", "champion": "Ezreal", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f6/Ezreal_Essence_Flux.png/revision/latest?cb=20180925213620" },
{ "ability": "Trueshot Barrage", "champion": "Ezreal", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/68/Ezreal_Trueshot_Barrage.png/revision/latest?cb=20180925213500" },
{ "ability": "Spirit Cleave", "champion": "Yone", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/fc/Yone_Spirit_Cleave.png/revision/latest?cb=20200726104436" },
{ "ability": "Decisive Strike", "champion": "Garen", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/DecisiveStrike.png" },
{ "ability": "Judgment", "champion": "Garen", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/4/40/Garen_Judgment.png/revision/latest?cb=20140108041510" },
{ "ability": "Demacian Justice", "champion": "Garen", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/1/16/Garen_Demacian_Justice.png/revision/latest?cb=20160608022450" },
{ "ability": "Twisted Advance", "champion": "Maokai", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/26/Maokai_Twisted_Advance.png/revision/latest?cb=20170503051019" },
{ "ability": "Sapling Toss", "champion": "Maokai", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ea/Maokai_Sapling_Toss.png/revision/latest?cb=20170818191752" },
{ "ability": "Bramble Smash", "champion": "Maokai", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ec/Maokai_Bramble_Smash.png/revision/latest?cb=20170503050747" },
{ "ability": "Nature's Grasp", "champion": "Maokai", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3a/Maokai_Nature%27s_Grasp.png/revision/latest?cb=20170818191723" },
{ "ability": "Death Sentence", "champion": "Thresh", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/a7/Thresh_Deathly_Leap.png/revision/latest?cb=20171221051020" },
{ "ability": "Flay", "champion": "Thresh", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Thresh_Flay.png/revision/latest?cb=20130929123338" },
{ "ability": "Crowstorm", "champion": "Fiddlesticks", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c4/Fiddlesticks_Crowstorm.png/revision/latest?cb=20200317230159" },
{ "ability": "Terrify", "champion": "Fiddlesticks", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Fiddlesticks_Terrify.png/revision/latest?cb=20200318130553" },
{ "ability": "Jack in the Box", "champion": "Shaco", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/73/Shaco_Jack_in_the_Box.png/revision/latest?cb=20160608033612" },
{ "ability": "Deceive", "champion": "Shaco", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/3/32/Shaco_Deceive.png/revision/latest?cb=20160608033455" },
{ "ability": "Hallucinate", "champion": "Shaco", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/65/Shaco_Hallucinate.png/revision/latest?cb=20160608033548" },
{ "ability": "Deadly Flourish", "champion": "Jhin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Jhin_Deadly_Flourish.png/revision/latest?cb=20171221042734" },
{ "ability": "Curtain Call", "champion": "Jhin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/ba/Jhin_Curtain_Call.png/revision/latest?cb=20171221042319" },
{ "ability": "Siphoning Strike", "champion": "Nasus", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Nasus_Siphoning_Strike.png/revision/latest?cb=20170818192422" },
{ "ability": "Wither", "champion": "Nasus", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/5/5e/Nasus_Wither.png/revision/latest?cb=20170818192532" },
{ "ability": "Fury of the Sands", "champion": "Nasus", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/d/d2/Nasus_Fury_of_the_Sands.png/revision/latest?cb=20170818192359" },
{ "ability": "Spirit Fire", "champion": "Nasus", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/99/Nasus_Spirit_Fire.png/revision/latest?cb=20170818192458" },
{ "ability": "Flamespitter", "champion": "Rumble", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Rumble_Flamespitter.png/revision/latest?cb=20171223034202" },
{ "ability": "Harpoons", "champion": "Rumble", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Rumble_Electro_Harpoon.png/revision/latest?cb=20171223034146" },
{ "ability": "The Equalizer", "champion": "Rumble", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b8/Rumble_The_Equalizer.png/revision/latest?cb=20171223034337" },
{ "ability": "Sonic Wave", "champion": "Lee Sin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b7/Lee_Sin_Sonic_Wave.png/revision/latest?cb=20230830010725" },
{ "ability": "Resonating Strike", "champion": "Lee Sin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/29/Lee_Sin_Resonating_Strike.png/revision/latest?cb=20230830010724" },
{ "ability": "Safeguard", "champion": "Lee Sin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b7/Lee_Sin_Safeguard.png/revision/latest?cb=20230830010724" },
{ "ability": "Dragon's Rage", "champion": "Lee Sin", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/1/1a/Lee_Sin_Dragon%27s_Rage.png/revision/latest?cb=20230830010721" },
{ "ability": "Prowl", "champion": "Nidalee", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/f/fa/Nidalee_Prowl.png/revision/latest?cb=20140627151211" },
{ "ability": "Javelin Toss", "champion": "Nidalee", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/2/27/Nidalee_Javelin_Toss.png/revision/latest?cb=20160608032959" },
{ "ability": "Bushwhack", "champion": "Nidalee", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ed/Nidalee_Bushwhack.png/revision/latest?cb=20160608032938" },
{ "ability": "Primal Surge", "champion": "Nidalee", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/9a/Nidalee_Primal_Surge.png/revision/latest?cb=20140627151506" },
{ "ability": "Jaws Of The Beast", "champion": "Warwick", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Warwick_Jaws_of_the_Beast.png/revision/latest?cb=20170817195500" },
{ "ability": "Blood Hunt", "champion": "Warwick", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Warwick_Blood_Hunt.png/revision/latest?cb=20170817200241" },
{ "ability": "Primal Howl", "champion": "Warwick", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/9/92/Warwick_Primal_Howl.png/revision/latest?cb=20170818011956" },
{ "ability": "Eternal Hunger", "champion": "Warwick", "image_url": "https://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell/InfiniteDuress.png" },
{ "ability": "Infinite Duress", "champion": "Warwick", "image_url": "https://static.wikia.nocookie.net/leagueoflegends/images/5/50/Warwick_Infinite_Duress.png/revision/latest?cb=20170817201148" }
]
let currentAbility;
let score = 0; // Initialize score

function randomAbility() {
    const randomIndex = Math.floor(Math.random() * abilities.length);
    const selectedAbility = abilities[randomIndex];
    return selectedAbility;
}

function checkAnswer() {
    const userInput = document.getElementById("answerInput").value.trim();
    const correctAnswer = currentAbility.champion;

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").textContent = "Correct! It's " + correctAnswer;
        score++; // Increment score on correct answer
    } else {
        document.getElementById("result").textContent = "Incorrect. It's " + correctAnswer;
    }

    // Update score display
    document.getElementById("score").textContent = "Score: " + score;

    // Clear input field and suggestions
    document.getElementById("answerInput").value = "";
    document.getElementById("suggestions").innerHTML = ""; 

    // Get a new random ability for the next question
    setNewQuestion();
}

function setNewQuestion() {
    currentAbility = randomAbility();
    document.getElementById("question").textContent = "Guess which champion has this ability:";
    document.getElementById("abilityname").textContent = "Ability: " + currentAbility.ability;

    // Update image for the new ability
    const abilityImage = document.getElementById("abilityImage");
    if (abilityImage) {
        abilityImage.src = currentAbility.image_url;
        abilityImage.alt = currentAbility.ability + " Image";
    } else {
        const newAbilityImage = document.createElement("img");
        newAbilityImage.id = "abilityImage";
        newAbilityImage.src = currentAbility.image_url;
        newAbilityImage.alt = currentAbility.ability + " Image";
        document.querySelector(".container").appendChild(newAbilityImage);
    }
}

function filterChampions(query) {
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (!query) return; // Return if query is empty

    const filteredChampions = abilities
        .map(item => item.champion)
        .filter((champion, index, self) => 
            self.indexOf(champion) === index && champion.toLowerCase().includes(query.toLowerCase())
        );

    filteredChampions.forEach(champion => {
        const div = document.createElement("div");
        div.classList.add("suggestion");
        div.textContent = champion;
        div.onclick = () => {
            document.getElementById("answerInput").value = champion;
            suggestions.innerHTML = "";
        };
        suggestions.appendChild(div);
    });
}

// Initialize the game with a random ability question
window.onload = function() {
    setNewQuestion();

    // Event listener for the autocomplete feature
    document.getElementById("answerInput").addEventListener("input", function() {
        filterChampions(this.value);
    });
}