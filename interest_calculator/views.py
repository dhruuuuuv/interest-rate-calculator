from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

YEARS_TO_SHOW = 50

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    interest_rate = params.get('interestRate', None)
    monthly_amount = params.get('monthlyAmount', 0)
    interest_frequency = params.get('interestFrequency', 'monthly')    

    if savings_amount is None or interest_rate is None:
        return HttpResponseBadRequest('Required parameters are not provided')

    # adjust to monthly, quarterly or annually
    if interest_frequency == 'monthly':
        interest_paid_frequency = 1
    elif interest_frequency == 'quarterly':
        interest_paid_frequency = 4
    elif interest_frequency == 'annually':
        interest_paid_frequency = 12

    calculated_values = [savings_amount]
    accumulated_interest_amount = 0

    for month in range(12 * YEARS_TO_SHOW):
        interest_for_this_month = calculated_values[month] * (interest_rate * 0.01)
        accumulated_interest_amount = accumulated_interest_amount + interest_for_this_month

        next_month_amount = (calculated_values[month] + monthly_amount)
        if month is not 0 and month % interest_paid_frequency == 0:
            next_month_amount = next_month_amount + accumulated_interest_amount
            accumulated_interest_amount = 0
        calculated_values.append(next_month_amount)


    return JsonResponse({'data': calculated_values})