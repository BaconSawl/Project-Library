// Sidebar stuff
// I put it here cuz
// cuz i want to ok
// also to practice ES6 module ig bro
export function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    /// Random Stuff I added because I was bored here
    // Random input borders color
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#d94b97', '#1faf67', '#039cdf', '#f4cb23', '#e9463f', '#9dd7e5', ''];
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
       input.style.setProperty('--focus-color', randomColor);
    });

    // Random sidebar text
    const randomP = document.querySelector('.random-p');
    const lines = [
        `Did you know that the inputs' borders are random everytime ?`,
        `Did you know that this text is random everytime too ?`,
        `How are you doing lately ? :)`,
        `"Once you've lost weight you'll never stop wanting to beat people to death with your bare hands."`,
        `Nothing better than a glass of #RedWine...🍷 Except maybe #Men 😄 #Yep #ImGay 🌈`,
        `WHY DID YOU MAKE ME DO THIS 
        YOU'RE PROCTASTINATING SO YOU CAN WATCH EVERYONE AROUND YOU FINISH THEIR TASKS.
        THINK ADHD, YOULL DISAPPOINT EVERY SINGLE SIGNIFICANT PERSON IN YOUR LIFE
        YOU'LL LIVE TO SEE THEIR REACTION CRUMBLE TO ANGER AND LET DOWNS
        YOU'LL LIVE TO SEE THEIR BELIEF IN YOU CRUMBLE INTO DUST AND BLOW AWAY
        EVERYONE AND EVERYTHING YOU KNOW WILL MOVE ON
        WHAT WILL YOU HAVE AFTER 500 UNRELATED SIDE TASKS`,
        `KILL ALL WORDLE ADMINS!!!`,
        `Vapes are a psyop to condition us to enjoy sucking robot dih.`,
        ``
    ]
    const randomText = lines[Math.floor(Math.random() * lines.length)];
    randomP.textContent = randomText;
}
export function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "antiquewhite";
};
