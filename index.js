
const superbowlWin = (records) => {
  let recordYear = records.find(record => {
    return record.result === 'W';
  })
  return recordYear ? recordYear.year : undefined;
}

