export default {
  formatNumber: (value, sep = ',') => {
    let formattedText;
    if (value.toString() === value.toLocaleString()) {
      const parts = value.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
      formattedText = parts[1] ? parts.join('.') : parts[0];
    } else {
      formattedText = value.toLocaleString();
    }

    return formattedText;
  },
};
