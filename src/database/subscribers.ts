import process from 'process';

const admin = parseInt(process.env.ADMIN!);

const subscribers: number[] = [admin];

export { subscribers };