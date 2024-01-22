const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const LENGTH = 8;
const MULTIPLIER = 9301;
const INCREMENT = 49297;
const MODULUS = 233280;

function generateRandomString(seed: string): string{
    let result = "";

    let randomSeed = 0;
    for (let i = 0; i < seed.length; i++) {
        randomSeed += seed.charCodeAt(i);
    }
    
    for ( let i = 0; i < LENGTH; i++ ) {
        randomSeed = (randomSeed * MULTIPLIER + INCREMENT) % MODULUS;
        const randomIndex = Math.floor(randomSeed / MODULUS * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
};

export default generateRandomString;