export const encode = text => text.replace(/([a-zA-Z\s])\1+/g, ({ length }, char) => length + char);

export const decode = text => text.replace(/(\d+)(.)/g, (_, num, char) => char.repeat(num));
