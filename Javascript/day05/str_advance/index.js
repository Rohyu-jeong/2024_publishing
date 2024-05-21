const coffee = "americano"

// 문자열 검색
coffee.indexOf("cano") // 몇 번째 인지 알려줌 [number]
coffee.includes("cano") // 포함하는지 알려줌 [boolean]
coffee.startsWith("am") // 시작하는지 알려줌 [boolean]

// 문자열 변환
coffee.toUpperCase() // 대문자화 [string]
coffee.toLowerCase() // 소문하좌 [string]

// 문자열 추출
coffee.slice(0, 5) // 0 ~ 4번째까지 자르기 [string] 
coffee.substring(0, 5) // 0 ~ 4번째까지 문자열 [string]

// 문자열 분할 및 결합
coffee.split("i") // i 기준으로 ["amer", "cano"] 배열 반환 [array]
coffee.concat("latte") // americanolatte 문자열 [string]

// 문자열 치환
coffee.replace("cano", "latte") // amerilatte 문자 치환 [string]
coffee.trim() // 좌우에 공백 제거 [string]