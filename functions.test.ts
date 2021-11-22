test('name in shuffleArray', () => {
  expect("Globotron").toContain("tron")
})


test('Robot and id should match', () => {
  const obj = {
  id: '9',
  name: 'Mechi', 
  imgAddress: 'https://robohash.org/Mechi',
  health: 80
};
  expect(obj.id).toEqual('9')

});


