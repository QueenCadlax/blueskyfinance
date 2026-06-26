const target = 3445.46;
const principal = 2500;
const interest = 375;
const service = 180;
const initiation = 315;
const feeModes = [
  {name: 'VAT on both', vat: (service, initiation, creditLife) => (service + initiation) * 0.15},
  {name: 'VAT on service only', vat: (service, initiation, creditLife) => service * 0.15},
  {name: 'VAT on initiation only', vat: (service, initiation, creditLife) => initiation * 0.15},
  {name: 'VAT on all fees', vat: (service, initiation, creditLife) => (service + initiation + creditLife) * 0.15},
  {name: 'No VAT', vat: () => 0},
];
const results = [];
for (let creditLife = 0; creditLife <= 20; creditLife += 0.01) {
  for (const mode of feeModes) {
    const vat = mode.vat(service, initiation, creditLife);
    const total = principal + interest + service + initiation + vat + creditLife;
    if (Math.abs(total - target) < 0.005) {
      results.push({creditLife: creditLife.toFixed(2), mode: mode.name, vat: vat.toFixed(2), total: total.toFixed(2)});
    }
  }
}
console.log(results.slice(0, 50));
