type Defined<T> = Exclude<T, undefined>;

type Defined1<T,
  K1 extends keyof Defined<T>
> = Defined<Defined<T>[K1]>;

type Defined2<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>
> = Defined<Defined1<T, K1>[K2]>;

type Defined3<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>
> = Defined<Defined2<T, K1, K2>[K3]>;

type Defined4<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>
> = Defined<Defined3<T, K1, K2, K3>[K4]>;

type Defined5<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>
> = Defined<Defined4<T, K1, K2, K3, K4>[K5]>;

type Defined6<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>
> = Defined<Defined5<T, K1, K2, K3, K4, K5>[K6]>;

type Defined7<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>
> = Defined<Defined6<T, K1, K2, K3, K4, K5, K6>[K7]>;

type Defined8<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>
> = Defined<Defined7<T, K1, K2, K3, K4, K5, K6, K7>[K8]>;

type Defined9<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>
> = Defined<Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>[K9]>;

type Defined10<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>
> = Defined<Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>[K10]>;

type Defined11<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>
> = Defined<Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>[K11]>;

type Defined12<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>
> = Defined<Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>[K12]>;

type Defined13<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>
> = Defined<Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>[K13]>;

type Defined14<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>
> = Defined<Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>[K14]>;

type Defined15<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>
> = Defined<Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>[K15]>;

type Defined16<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
  K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>
> = Defined<Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>[K16]>;

type Defined17<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
  K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
  K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>
> = Defined<Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>[K17]>;

type Defined18<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
  K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
  K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
  K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>
> = Defined<Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>[K18]>;

type Defined19<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
  K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
  K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
  K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>,
  K19 extends keyof Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>
> = Defined<Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>[K19]>;

type Defined20<T,
  K1 extends keyof Defined<T>,
  K2 extends keyof Defined1<T, K1>,
  K3 extends keyof Defined2<T, K1, K2>,
  K4 extends keyof Defined3<T, K1, K2, K3>,
  K5 extends keyof Defined4<T, K1, K2, K3, K4>,
  K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
  K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
  K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
  K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
  K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
  K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
  K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
  K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
  K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
  K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
  K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
  K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
  K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>,
  K19 extends keyof Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>,
  K20 extends keyof Defined19<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19>
> = Defined<Defined19<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19>[K20]>;

interface GetPropFunction {

  <
    T,
    K1 extends keyof Defined<T>
  >(
    object: T,
    ...keys: [K1]
  ): Defined<T>[K1] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>
  >(
    object: T,
    ...keys: [K1, K2]
  ): Defined1<T, K1>[K2] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>
  >(
    object: T,
    ...keys: [K1, K2, K3]
  ): Defined2<T, K1, K2>[K3] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4]
  ): Defined3<T, K1, K2, K3>[K4] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5]
  ): Defined4<T, K1, K2, K3, K4>[K5] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6]
  ): Defined5<T, K1, K2, K3, K4, K5>[K6] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7]
  ): Defined6<T, K1, K2, K3, K4, K5, K6>[K7] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8]
  ): Defined7<T, K1, K2, K3, K4, K5, K6, K7>[K8] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9]
  ): Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>[K9] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10]
  ): Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>[K10] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11]
  ): Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>[K11] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12]
  ): Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>[K12] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13]
  ): Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>[K13] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14]
  ): Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>[K14] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15]
  ): Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>[K15] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
    K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16]
  ): Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>[K16] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
    K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
    K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17]
  ): Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>[K17] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
    K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
    K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
    K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18]
  ): Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>[K18] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
    K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
    K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
    K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>,
    K19 extends keyof Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19]
  ): Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>[K19] | undefined;

  <
    T,
    K1 extends keyof Defined<T>,
    K2 extends keyof Defined1<T, K1>,
    K3 extends keyof Defined2<T, K1, K2>,
    K4 extends keyof Defined3<T, K1, K2, K3>,
    K5 extends keyof Defined4<T, K1, K2, K3, K4>,
    K6 extends keyof Defined5<T, K1, K2, K3, K4, K5>,
    K7 extends keyof Defined6<T, K1, K2, K3, K4, K5, K6>,
    K8 extends keyof Defined7<T, K1, K2, K3, K4, K5, K6, K7>,
    K9 extends keyof Defined8<T, K1, K2, K3, K4, K5, K6, K7, K8>,
    K10 extends keyof Defined9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>,
    K11 extends keyof Defined10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>,
    K12 extends keyof Defined11<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11>,
    K13 extends keyof Defined12<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12>,
    K14 extends keyof Defined13<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13>,
    K15 extends keyof Defined14<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14>,
    K16 extends keyof Defined15<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15>,
    K17 extends keyof Defined16<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16>,
    K18 extends keyof Defined17<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17>,
    K19 extends keyof Defined18<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18>,
    K20 extends keyof Defined19<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19>
  >(
    object: T,
    ...keys: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19, K20]
  ): Defined19<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, K11, K12, K13, K14, K15, K16, K17, K18, K19>[K20] | undefined;

}

/**
 * Gets a nested property value from an object, propagating any null or undefined values.
 * @param object object to inspect
 * @param keys nested property names
 */
export const getProp: GetPropFunction = (object: any, ...keys: string[]) => {
  let index = 0;

  while (object != null && index < keys.length) {
    // tslint:disable-next-line
    object = object[keys[index++]];
  }

  return index && index === keys.length ? object : undefined;
};
