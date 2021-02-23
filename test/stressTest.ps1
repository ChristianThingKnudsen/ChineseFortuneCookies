$responseTime = New-Object Collections.Generic.List[Int]
$url = "http://127.0.0.1:54528/cookies" # Needs to be set

$len = 1000

for ($i = 1; $i -lt $len; $i++) {    $r = (Measure-Command -Expression { $site = Invoke-WebRequest -Uri $url -UseBasicParsing }).Milliseconds

    $responseTime.Add($r)
}

$sum = 0
$responseTime|Foreach{$sum += $_}

$avg = $sum/$len

$avg