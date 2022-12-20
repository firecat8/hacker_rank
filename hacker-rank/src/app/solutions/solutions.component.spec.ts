import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponent } from './solutions.component';
import { default as nonDivisibleSubsetTest14Data } from './nonDivisibleSubSet_test_14.json';
import { default as queenAttackTest18Data } from './queenAttack_test_18.json';
import { default as acmTeamTest7Data } from './acmTeam_test_7.json';
import { default as flatlandSpaceStationsTest13Data } from './flatlandSpaceStations_test_13.json';
type TestDAta = {
  data: number[][];
};

describe('SolutionsComponent', () => {
  let component: SolutionsComponent;
  let fixture: ComponentFixture<SolutionsComponent>;

  function expectChair(n: number, m: number, s: number, expected: number) {
    expect(component.saveThePrisoner(n, m, s)).toEqual(expected);
  }

  function testCircularArrayRotation(a: number[], k: number, queries: number[], expected: number[]) {
    expect(component.circularArrayRotation(a, k, queries)).toEqual(expected);
  }
  function testJumpingOnClouds(c: number[], k: number, expected: number) {
    expect(component.jumpingOnClouds(c, k)).toEqual(expected);
  }
  function testCutTheSticks(arr: number[], expected: number[]) {
    expect(component.cutTheSticks(arr)).toEqual(expected);
  }
  function testNonDivisibleSubset(s: number[], k: number, expected: number) {
    expect(component.nonDivisibleSubset(k, s)).toEqual(expected);
  }
  function testEqualizeArray(arr: number[], expected: number) {
    expect(component.equalizeArray(arr)).toEqual(expected);
  }
  function testQueensAttack(n: number, r_q: number, c_q: number, obstacles: number[][], expected: number) {
    expect(component.queensAttackV2(n, obstacles.length, r_q, c_q, obstacles)).toEqual(expected);
  }
  function testAcmTeam(topic: string[], expected: number[]) {
    expect(component.acmTeam(topic)).toEqual(expected);
  }
  function testTaumBday(b: number, w: number, bc: number, wc: number, z: number, expected: number) {
    expect(component.taumBday(b, w, bc, wc, z)).toEqual(expected);
  }
  function testKaprekarNumbers(p: number, q: number, expected: string[]) {
    expect(component.kaprekarNumbers(p, q)).toEqual(expected);
  }
  function testBeautifulTriplets(d: number, arr: number[], expected: number) {
    expect(component.beautifulTriplets(d, arr)).toEqual(expected);
  }
  function testMinimumDistances(arr: number[], expected: number) {
    expect(component.minimumDistances(arr)).toEqual(expected);
  }
  function testHowManyGames(p: number, d: number, m: number, s: number, expected: number) {
    expect(component.howManyGames(p, d, m, s)).toEqual(expected);
  }
  function testTimeInWords(h: number, m: number, expected: string) {
    expect(component.timeInWords(h, m)).toEqual(expected);
  }
  function testFlatlandSpaceStations(citiesCount: number, cities: number[], expected: number) {
    expect(component.flatlandSpaceStations(citiesCount, cities)).toEqual(expected);
  }
  function testAlternate(s: string, expected: number) {
    expect(component.alternate(s)).toEqual(expected);
  }
  function testIcecreamParlor(money: number, costs: number[], expected: number[]) {
    expect(component.icecreamParlor(money, costs)).toEqual(expected);

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test saveThePrisoner s = 1, n = m, n = 1...100', () => {
    for (var i = 1; i <= 100; i++) {
      expectChair(i, i, 1, i);
    }
  });

  it('test saveThePrisoner s = 2, n = m, n = 2...100', () => {
    for (var i = 2; i <= 100; i++) {
      expectChair(i, i, 2, 1);
    }
  });

  it('test saveThePrisoner s = 3, m = n * 10, n = 3...100', () => {
    for (var i = 3; i <= 100; i++) {
      expectChair(i, i * 10, 3, 2);
    }
  });

  it('test saveThePrisoner m = n = 100, s = 2...100', () => {
    for (var i = 1; i < 100; i++) {
      expectChair(100, 100, i + 1, i);
    }
  });
  it('test saveThePrisoner m = 100, n = 50, s = 2...100', () => {
    for (var i = 1; i < 50; i++) {
      expectChair(50, 100, i + 1, i);
    }
  });
  it('test saveThePrisoner m = 101, n = 50, s = 1...100', () => {
    for (var i = 1; i <= 50; i++) {
      expectChair(50, 101, i, i);
    }
  });

  it('test saveThePrisoner HackerRank cases', () => {
    expectChair(999999999, 999983621, 2, 999983622);
    expectChair(1000000000, 999974157, 866502488, 866476644);
    expectChair(7, 19, 2, 6);
    expectChair(3, 7, 3, 3);
  });

  it('test circularArrayRotation a.length % k = 0', () => {
    for (var i = 1; i <= 10; i++) {
      var a: number[] = [];
      var expected: number[] = [];
      var q: number[] = [];

      for (var j = 1; j < i + 1; j++) {
        a.push(j);
        q.push(j - 1);
      }
      expected = a.slice(1);
      expected.push(a[0]);
      testCircularArrayRotation(a, 1, q, expected);
    }
  });

  it('test circularArrayRotation HackerRank cases', () => {
    testCircularArrayRotation([1, 2, 3], 2, [0, 1, 2], [2, 3, 1]);
  });
  it('test jumpingOnClouds HackerRank cases', () => {
    testJumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2, 92);
  });
  it('test cutTheSticks HackerRank cases', () => {
    testCutTheSticks([1, 2, 3], [3, 2, 1]);
    testCutTheSticks([5, 4, 4, 2, 2, 8], [6, 4, 2, 1]);
  });

  it('test nonDivisibleSubset HackerRank cases', () => {
    testNonDivisibleSubset([1, 7, 2, 4], 3, 3);
    testNonDivisibleSubset([278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], 7, 11);
    testNonDivisibleSubset(nonDivisibleSubsetTest14Data.data, 2, 2);
  });

  it('test testEqualizeArray HackerRank cases', () => {
    testEqualizeArray([1, 7, 2, 4], 3);
    testEqualizeArray([3, 3, 2, 1, 3], 2);
    testEqualizeArray([1, 2, 3, 1, 2, 3, 3, 3], 4);
    testEqualizeArray([1, 2, 2, 3], 2);
    testEqualizeArray([1, 2, 2, 1], 2);
    testEqualizeArray([1, 2, 2, 1, 2], 2);
    testEqualizeArray([1, 2, 2, 3, 3], 3);
    testEqualizeArray([3], 0);
    testEqualizeArray([3, 3], 0);
    testEqualizeArray([46, 80, 18, 26, 60, 66, 24, 21, 60, 18, 14, 34, 72, 69,
      14, 8, 13, 24, 14, 81, 81, 24, 81, 21, 60, 34, 18, 44, 81, 8, 80, 75,
      100, 74, 100, 28, 100, 82, 81, 80, 13, 96, 69, 11, 11, 24, 60, 3, 14,
      13, 74, 96, 81, 8, 100, 28, 43, 60, 44, 8, 21, 11, 80, 3, 69, 4, 80, 28, 81, 11, 66], 64);
  });

  it('test queensAttack HackerRank cases', () => {
    testQueensAttack(4, 4, 4, new Array(0), 9);
    testQueensAttack(5, 4, 3, [[5, 5], [4, 2], [2, 3]], 10);
    testQueensAttack(1, 1, 1, new Array(0), 0);
    testQueensAttack(2, 1, 1, new Array(0), 3);
    testQueensAttack(8, 4, 4, [[3, 5]], 24);
    testQueensAttack(2, 1, 1, [[2, 2], [2, 3]], 2);
    testQueensAttack(2, 1, 1, [[3, 3], [1, 3]], 3);
    testQueensAttack(5, 1, 1, [[3, 3]], 9);
    testQueensAttack(5, 1, 1, [[4, 4]], 10);
    testQueensAttack(5, 1, 1, [[4, 3], [4, 3]], 12);
    testQueensAttack(5, 1, 1, [[0, 0]], 12);
    testQueensAttack(5, 5, 5, [[0, 0]], 12);
    testQueensAttack(5, 5, 5, [[1, 1]], 11);
    testQueensAttack(5, 1, 1, [[6, 6]], 12);
    testQueensAttack(100000, 2816, 9745, (<TestDAta>queenAttackTest18Data).data, 110198);
  });

  it('test acmTeam HackerRank cases', () => {
    testAcmTeam(["1", "1"], [1, 1]);
    testAcmTeam(["10101", "11110", "00010"], [5, 1]);
    testAcmTeam(["10101", "11100", "11010", "00101"], [5, 2]);
    testAcmTeam(["11101", "10101", "11001", "10111", "10000", "01110"], [5, 6]);
    testAcmTeam(["1111", "0000", "0000"], [4, 2]);
    testAcmTeam(["1111", "0000", "1111"], [4, 3]);
    testAcmTeam(acmTeamTest7Data.data, [416, 1]);
  });

  it('test taumBday HackerRank cases', () => {
    testTaumBday(10, 10, 1, 1, 1, 20);
    testTaumBday(5, 9, 2, 3, 4, 37);
    testTaumBday(3, 6, 9, 1, 1, 12);
    testTaumBday(7, 7, 4, 2, 1, 35);
    testTaumBday(3, 3, 1, 9, 2, 12);
    testTaumBday(3, 5, 3, 4, 1, 29);
    //Test case 12
    testTaumBday(443463982, 833847400, 429734889, 628664883, 610875522, 714782523241122198);
    testTaumBday(623669229, 435417504, 266946955, 600641444, 515391879, 428016399954183471);
    testTaumBday(763364819, 37220400, 711640763, 34378393, 655626808, 528005272909240819);
    testTaumBday(177742229, 51792729, 358392247, 642296973, 158448705, 90470040201136571);
    testTaumBday(402332409, 253667421, 384186676, 728988281, 883897044, 339491328041275785);
    testTaumBday(962555475, 753433321, 20275090, 23915540, 815412555, 37534663611326090);
    testTaumBday(853918694, 319895873, 649259954, 136169934, 948560755, 597975411899462458);
    testTaumBday(112651828, 759839162, 236494610, 379598782, 212996957, 315075570539747764);
    testTaumBday(751886489, 142963601, 250217357, 463527251, 29858345, 228175680952112475);
    testTaumBday(905844164, 493785831, 81651073, 116752762, 136082804, 131614007567103194);
  });

  it('test kaprekarNumbers HackerRank cases', () => {
    testKaprekarNumbers(1, 100, ["1", "9", "45", "55", "99"]);
  });

  it('test beautifulTriplets HackerRank cases', () => {
    testBeautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10], 3);
    testBeautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19], 2);
  });

  it('test minimumDistances HackerRank cases', () => {
    testMinimumDistances([7, 1, 3, 4, 1, 7], 3);
    testMinimumDistances([1, 2, 3, 4, 10], -1);
  });

  it('test howManyGames HackerRank cases', () => {
    testHowManyGames(20, 3, 6, 80, 6);
    testHowManyGames(20, 3, 6, 85, 7);
    testHowManyGames(56, 41, 4, 1546, 370);//test case43
  });

  it('test timeInWords HackerRank cases', () => {
    testTimeInWords(3, 0, "three o' clock");
    testTimeInWords(5, 1, "one minute past five");
    testTimeInWords(5, 11, "eleven minutes past five");
    testTimeInWords(5, 18, "eighteen minutes past five");
    testTimeInWords(5, 30, "half past five");
    testTimeInWords(7, 15, "quarter past seven");
    testTimeInWords(5, 45, "quarter to six");
    testTimeInWords(5, 59, "one minute to six");
    testTimeInWords(5, 58, "two minutes to six");
    testTimeInWords(5, 47, "thirteen minutes to six");
    testTimeInWords(5, 44, "sixteen minutes to six");
    testTimeInWords(12, 44, "sixteen minutes to one");
    testTimeInWords(5, 28, "twenty eight minutes past five");
  });

  it('test flatlandSpaceStations HackerRank cases', () => {
    testFlatlandSpaceStations(5, [0, 4], 2);
    testFlatlandSpaceStations(5, [4, 0], 2);
    testFlatlandSpaceStations(5, [4, 1], 1);
    testFlatlandSpaceStations(6, [0, 1, 2, 4, 3, 5], 0);
    testFlatlandSpaceStations(6, [0, 2], 3);
    testFlatlandSpaceStations(6, [1], 4);
    testFlatlandSpaceStations(3, [0], 2);
    testFlatlandSpaceStations(3, [1], 1);
    testFlatlandSpaceStations(3, [2], 2);
    testFlatlandSpaceStations(4, [0], 3);
    testFlatlandSpaceStations(4, [2, 0], 1);
    testFlatlandSpaceStations(4, [3, 0], 1);
    testFlatlandSpaceStations(6, [0, 5], 2);
    testFlatlandSpaceStations(6, [0, 4], 2);
    testFlatlandSpaceStations(6, [0, 3], 2);
    testFlatlandSpaceStations(6, [5, 3], 3);
    testFlatlandSpaceStations(7, [0, 4, 6], 2);
    testFlatlandSpaceStations(1, [0], 0);
    testFlatlandSpaceStations(2, [0], 1);
    testFlatlandSpaceStations(5, [2], 2);
    testFlatlandSpaceStations(25, [4], 20);
    testFlatlandSpaceStations(100000, flatlandSpaceStationsTest13Data.data, 1504);
  });

  it('test alternate HackerRank cases', () => {
    testAlternate("beabeefeab", 5);
    testAlternate("asdcbsdcagfsdbgdfanfghbsfdab", 8);
    testAlternate("asvkugfiugsalddlasguifgukvsa", 0);
  });

  it('test icecreamParlor HackerRank cases', () => {
    testIcecreamParlor(4, [1, 4, 5, 3, 2], [1, 4]);
    testIcecreamParlor(4, [2, 2, 4, 3], [1, 2]);
    testIcecreamParlor(9, [1, 3, 4, 6, 7, 9], [2, 4]);
    testIcecreamParlor(8, [1, 3, 4, 4, 6, 8], [3, 4]);
    testIcecreamParlor(3, [1, 2], [1, 2]);


  });

});
