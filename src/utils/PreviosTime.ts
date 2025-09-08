export function timeSince(date: string) {
  const newDate = new Date();
  const pastDate = new Date(date); // درست کردن
  const seconds = Math.floor((+newDate - +pastDate) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return `اخرین بروز رسانی${Math.floor(interval)} سال قبل `;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `اخرین بروز رسانی${Math.floor(interval)} ماه  قبل `;

  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `اخرین بروز رسانی${Math.floor(interval)} روز قبل `;

  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `اخرین بروز رسانی${Math.floor(interval)} ساعت  قبل `;

  }
  interval = seconds / 60;
  if (interval > 1) {
    return `اخرین بروز رسانی${Math.floor(interval)} دقیقه قبل `;

  }
    return `اخرین بروز رسانی${Math.floor(seconds)}ثانیه قبل `;

}
