import { IntoWordsPipe } from './into-words.pipe';

describe('IntoWordsPipe', () => {

  let pipe:IntoWordsPipe;

  beforeEach(()=>{
    pipe = new IntoWordsPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return ONE TWO THREE given 123',()=>{
    expect(pipe.transform(123)).toBe("ONE TWO THREE");
  });

  it('should return ONE TWO THREE ZERO given 1230',()=>{
    expect(pipe.transform(1230)).toBe("ONE TWO THREE ZERO");
  });

  it('should return ONE ZERO TWO THREE given 1023',()=>{
    expect(pipe.transform(1023)).toBe("ONE ZERO TWO THREE");
  });
});
