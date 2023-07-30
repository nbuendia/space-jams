export function dateValidator(month, day, year) {
  const daysInMonth = () => new Date(year, month, 0).getDate();
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let monthValidator;
  let dayValidator;
  let yearValidator;

  if (year === '2012' && month === '8' && day < 6)
    dayValidator = 'Choose day of or after landing date.';
  else if (year == currentYear && month == currentMonth && day > currentDay)
    dayValidator = 'Choose day before current.';
  else if (day < 1 || day > daysInMonth())
    dayValidator = `Day must be a number between 1 - ${daysInMonth()}.`;
  else dayValidator = null;

  if (year === '2012' && month < 8)
    monthValidator = 'Choose month of or after landing date.';
  else if (year == currentYear && month > currentMonth)
    monthValidator = 'Choose month of or before current.';
  else monthValidator = null;

  if (year < 2012) yearValidator = 'Choose year of or after landing date.';
  else if (year > currentYear) yearValidator = 'Choose year before current.';
  else yearValidator = null;

  if (!month) monthValidator = 'Choose month.';
  if (!day) dayValidator = 'Choose day.';
  if (!year) yearValidator = 'Choose year.';

  const isValid = !monthValidator && !dayValidator && !yearValidator;

  return { monthValidator, dayValidator, yearValidator, isValid };
}
