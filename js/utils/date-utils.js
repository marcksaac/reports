var DateUtils = function () {};

DateUtils.prototype.getDays = function(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

DateUtils.prototype.addDays = function(date, days) {
  date = new Date(date);
  if(isNull(days)) {
    days = 1; 
  }
  date.setTime(date.getTime() + days * 86400000);
  return date
}

DateUtils.prototype.subDays = function(date, days) { 
  date = new Date(date);
    if(isNull(days)) {
      days = 1;
    }
    date.setTime(date.getTime() - days * 86400000);
    return date;
}

DateUtils.prototype.addMinutes = function(date, minutes) {
  date = new Date(date);
  if(isNull(minutes)) {
    minutes = 1;
  }
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}

DateUtils.prototype.subMinutes = function(date, minutes) {
  date = new Date(date);
  if(isNull(minutes)) {
    minutes = 1;
  }
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}

DateUtils.prototype.addHours = function(date, numbers) {
  date = new Date(date);
  if(isNull(numbers)) {
    numbers = 1;
  }
  date.setHours(date.getHours() + numbers);
  return date;
}

DateUtils.prototype.subHours = function(date, numbers) {
  date = new Date(date);
  if(isNull(numbers)) {
    numbers = 1;
  }
  date.setHours(date.getHours() - numbers);
  return date;
}

DateUtils.prototype.addMonths = function(date, months) {
  date = new Date(date);
    if(isNull(months)) {
      months = 1;
    }
    date.setMonth(date.getMonth() + months);
    return date;
}

DateUtils.prototype.subMonths = function(date, months) {
  date = new Date(date);
    if(isNull(months)) {
      months = 1;
    }
    date.setMonth(date.getMonth() - months);
    return date;
}

DateUtils.prototype.getString = function(date) {
  var s = date.toISOString();
  s = s.replace(/T/, ' ');
  s = s.replace(/\..+/, '');
  return s;
}

DateUtils.prototype.setAtStartOfDay = function(date) {
  date = new Date(date);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

DateUtils.prototype.atEndOfDay = function(date) {
  date = new Date(date);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
  return date;
}

DateUtils.prototype.setAtStartOfMonth = function(date) {
  date = new Date(date);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

DateUtils.prototype.setAtStartOfYear = function(date) {
  date = new Date(date);
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

DateUtils.prototype.getSuffix = function(date) {
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  return date.getFullYear() + "-" + month;
}

DateUtils.prototype.getMax = function(dateA, dateB) {
  if(isNull(dateA)) {
    return dateB;
  }
  if(isNull(dateB)) {
    return dateA;
  }
  return dateA.getTime() >= dateB.getTime() ? dateA : dateB;
}

DateUtils.prototype.getMin = function(dateA, dateB) {
  if(isNull(dateA)) {
    return dateB;
  }
  if(isNull(dateB)) {
    return dateA;
  }
  return dateA.getTime() <= dateB.getTime() ? dateA : dateB;
}

DateUtils.prototype.parseDate = function(dateString) {
  return new Date(Date.parse(dateString));
}

var DateUtils = new DateUtils();