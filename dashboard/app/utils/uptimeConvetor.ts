export  function uptimeConverter(uptime: number) {
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    return {days:days,hours:hours}
}