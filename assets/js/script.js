function DisplayPrice()
{
	const displaydiv = document.getElementById('DisplayPrice');
	const option1 = document.getElementById('option1');
	const option2 = document.getElementById('option2');
	const option3 = document.getElementById('option3');
	const option4 = document.getElementById('option4');
	var selectedvalue;

	option1.addEventListener('change', function()
	{
		if (option1.checked)
		{
			selectedvalue = option1.value;
			if (selectedvalue == "1")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 3000</p>';
			}
			else if (selectedvalue == "3")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 7500</p>';
			}
			else if (selectedvalue == "6")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 14000</p>';
			} else if (selectedvalue == "12")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 25000</p>';
			}
		}
	});

	option2.addEventListener('change', function()
	{
		if (option2.checked)
		{
			selectedvalue = option2.value;
			if (selectedvalue == "1")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 3000</p>';
			}
			else if (selectedvalue == "3")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 7500</p>';
			}
			else if (selectedvalue == "6")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 14000</p>';
			} else if (selectedvalue == "12")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 25000</p>';
			}
		}
	});

	option3.addEventListener('change', function()
	{
		if (option3.checked)
		{
			selectedvalue = option3.value;
			if (selectedvalue == "1")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 3000</p>';
			}
			else if (selectedvalue == "3")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 7500</p>';
			}
			else if (selectedvalue == "6")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 14000</p>';
			} else if (selectedvalue == "12")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 25000</p>';
			}
		}
	});

	option4.addEventListener('change', function()
	{
		if (option4.checked)
		{
			selectedvalue = option4.value;
			if (selectedvalue == "1")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 3000</p>';
			}
			else if (selectedvalue == "3")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 7500</p>';
			}
			else if (selectedvalue == "6")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 14000</p>';
			} else if (selectedvalue == "12")
			{
			displaydiv.innerHTML = '<p style="font-size: 25px;">Price: Rs 25000</p>';
			}
		}
	});
}
DisplayPrice();