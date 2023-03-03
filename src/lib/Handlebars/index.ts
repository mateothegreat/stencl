import * as Handlebars from 'handlebars';

Handlebars.registerHelper('env', (context, options) => {
  for (let e in process.env) {
    if (e.toLowerCase() == context.toLowerCase()) {
      return process.env[e];
    }
  }
});

Handlebars.registerHelper('pascalCase', (context, options) => {
  return context.replace(/(\w)(\w*)/g,
    (g0: string, g1: string, g2: string) => {
      return g1.toUpperCase() + g2.toLowerCase();
    });
});

Handlebars.registerHelper('camelCase', (context, options) => {
  return context.match(/[a-z]+|\d+/gi).map((m: string, i: number) => {
    let low = m.toLowerCase();
    if (i != 0) {
      low = low.split('').map((s, k) => k == 0 ? s.toUpperCase() : s).join('');
    }
    return low;
  }).join``;
});
